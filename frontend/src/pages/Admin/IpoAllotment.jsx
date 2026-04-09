const IpoAllotment = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">IPO Allotment</h2>
      <p className="text-gray-500 mb-6">Check allotment status</p>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          placeholder="Enter PAN Number"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Check Status
        </button>

        <p className="text-gray-500 text-sm">
          Result will be shown here after integration.
        </p>
      </div>
    </div>
  );
};

export default IpoAllotment;