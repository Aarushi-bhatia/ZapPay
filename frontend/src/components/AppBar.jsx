export const Appbar = () => {
  return (
    <div className="shadow-md bg-white h-16 flex justify-between items-center px-6">

      <div className="text-lg font-semibold text-gray-800">ZapPay</div>

      <div className="flex items-center">
        <div className="text-gray-600 text-md mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-300 flex items-center justify-center text-xl font-bold text-gray-800">
          U
        </div>
      </div>
    </div>
  );
};
