import LoadParam from "@/components/LoadParams";
import { Suspense } from "react";

const UserDetailsPage = async ({ params }) => {
  const { userID } = await params;

  return (
    <div>
      User Details Page :
      <Suspense fallback={<p>Loading...</p>}>
        <LoadParam userID={userID} />
      </Suspense>
    </div>
  );
};

export default UserDetailsPage;
