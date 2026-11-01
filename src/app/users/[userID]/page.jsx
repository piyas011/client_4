import React from "react";

const UsersDetailsPage = async ({ params }) => {
  const { userID } = await params;
  return <div>User Details Page : {userID}</div>;
};

export default UsersDetailsPage;
