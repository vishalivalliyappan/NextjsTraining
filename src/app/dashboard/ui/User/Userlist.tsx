import Link from "next/link";
import React from "react";
interface User {
  id: string;
  name: string;
  email: string;
}

const ContactPage = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("failed to fetch user");
  }
  return res.json();
};
const UserList: React.FC = async () => {
  const users = await ContactPage();

  return (
    <div>
      <div className="p-5 bg-lime-400 text-white text-xl hover:bg-lime-400">
        ContactPage
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/dashboard/User/${user.id}`}>
            {user.name} ({user.email})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
