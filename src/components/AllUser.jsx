import Link from "next/link";
import { use } from "react";

const AllUserComponents = ({ userPromise }) => {
  const users = use(userPromise());

  return (
    <div className="mt-5">
      <p>All User Components </p>
      <div className="flex flex-wrap">
        {users.map((user) => (
          <div className="p-4 border m-2 rounded-[10px]" key={user._id}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Phone Number : {user.phone}</p>
            <div className="flex gap-3">
              <Link className="p-2 border " href={`users/${user._id}`}>
                View Details
              </Link>
              <button className="p-2 border ">Edit</button>
              <button className="p-2 border ">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUserComponents;
