const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4 mt-4">
        <div>
          <label className="text-sm text-gray-600">Site Name</label>
          <input className="w-full border px-3 py-2 rounded mt-1" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Admin Email</label>
          <input className="w-full border px-3 py-2 rounded mt-1" />
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;