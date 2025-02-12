import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Appbar />
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Balance value={"10,000"} />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};
