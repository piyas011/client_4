import User from "@/components/User";
import React, { Suspense } from "react";

const UsersPage = () => {
  //
  const usersPromise = async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  };

  return (
    <div>
      <h1>Users Page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <User usersPromise={usersPromise} />;
      </Suspense>
    </div>
  );
};

export default UsersPage;
