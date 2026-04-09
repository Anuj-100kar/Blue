const IpoSubscription = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">IPO Subscription</h2>
      <p className="text-gray-500 mb-6">Track IPO subscription details</p>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600">
          This module will show subscription data like QIB, HNI, Retail.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-gray-500">Retail</p>
            <p className="text-xl font-bold text-blue-600">2.3x</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <p className="text-sm text-gray-500">HNI</p>
            <p className="text-xl font-bold text-green-600">4.1x</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <p className="text-sm text-gray-500">QIB</p>
            <p className="text-xl font-bold text-purple-600">6.8x</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpoSubscription;