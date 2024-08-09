import { PrismaClient } from "@prisma/client";
import client from "@/db";

async function fetchData() {
  const user = await client.user.findFirst();
  return {
    email: user?.username,
    name: "baj",
  };
}

export default async function User() {
  const userData = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  );
}
