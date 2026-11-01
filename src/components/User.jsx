import Link from "next/link";
import React, { use } from "react";

const User = ({ usersPromise }) => {
  const users = use(usersPromise());
  console.log(users);
  return (
    <div className="p-5">
      <h2>Users Components</h2>
      <div className="flex justify-between items-center my-4">
        <p>total User : {users.length}</p>
        <Link className="border p-1 rounded-[10px]" href="/users/add">
          Add New User
        </Link>
      </div>
      {users.map((user) => (
        <div className="border p-4 rounded-[10px]" key={user._id}>
          <h3>Name :{user.name}</h3>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
          <Link href={`/users/${user._id}`}>
            <button className="p-2 border rounded-[10px] cursor-pointer ">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default User;
