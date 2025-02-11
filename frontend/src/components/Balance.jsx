export const Balance = ({ value }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
      <div className="text-gray-700 text-lg font-bold">Your Balance</div>
      <div className="text-green-600 text-xl font-semibold">Rs {value}</div>
    </div>
  );
};
