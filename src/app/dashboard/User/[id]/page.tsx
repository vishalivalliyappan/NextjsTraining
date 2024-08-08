import React from "react";
interface User {
  id: string;
  name: string;
  email: string;
}

const ContactPage = async (id:string): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch user");
  }
  return res.json();
};
const UserPage: React.FC <{params:{id:string}}> = async ({params}) => {
  const user = await ContactPage(params.id);

  return (
    <div>
      <div className="p-5 bg-lime-400 text-white text-xl hover:bg-lime-400">
        ContactPage
      </div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserPage;
