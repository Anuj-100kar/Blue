const Help = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Help</h2>

      <div className="bg-white p-6 rounded-xl shadow mt-4 space-y-3">
        <p className="text-gray-600">
          Need help? Contact support or check FAQs.
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Help;