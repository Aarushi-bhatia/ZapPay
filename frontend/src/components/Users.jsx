import { useState } from "react";
import { Button } from "./Button";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "aarushi",
      lastName: "bhatia",
      _id: 1,
    },
    {
      firstName: "karan",
      lastName: "bhatia",
      _id: 1,
    },
    {
      firstName: "kritika",
      lastName: "pawar",
      _id: 1,
    },
  ]);

  return (
    <>
      <div className="font-bold mt-6 text-lg text-gray-800">Users</div>
      <div className="my-3">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between items-center mb-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center ">
        <div className="rounded-full  h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
            <Button label={"Send Money"} />
        </div>
    </div>
  );
}
