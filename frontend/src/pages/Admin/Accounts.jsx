const Accounts = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Accounts</h2>

      <div className="bg-white p-6 rounded-xl shadow mt-4">
        <p className="text-gray-600 mb-4">Admin Profile</p>

        <div className="space-y-2">
          <p><strong>Name:</strong> Admin</p>
          <p><strong>Email:</strong> admin@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;