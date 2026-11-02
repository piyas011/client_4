import AllUser from "@/components/AllUser";
import Link from "next/link";
import { Suspense } from "react";

const AllUsersPage = () => {
  const userPromise = async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  };
  return (
    <div>
      <Link className="px-5 py-3 border rounded-[10px]" href="/users/add">
        Add New User
      </Link>
      <Suspense fallback={<p>loading...</p>}>
        <AllUser userPromise={userPromise} />
      </Suspense>
    </div>
  );
};

export default AllUsersPage;
