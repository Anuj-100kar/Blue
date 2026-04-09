const ApiManager = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">API Manager</h2>

      <div className="bg-white p-6 rounded-xl shadow mt-4">
        <p className="text-gray-600 mb-4">
          Manage external API integrations
        </p>

        <div className="flex justify-between items-center border p-3 rounded">
          <span>IPO Live API</span>
          <span className="text-green-600 font-medium">Connected</span>
        </div>
      </div>
    </div>
  );
};

export default ApiManager;