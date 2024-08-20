import React, { useEffect, useState } from 'react';

type User = {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  avatar: string;
};

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/users');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>
              {user.name.firstname} {user.name.lastname}
            </h2>
            <img src={user.avatar} alt={`${user.name.firstname}'s avatar`} width={100} />
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;