import React from 'react';

const BrokerCard = ({
  name,
  logo,
  rating,
  reviews,
  accounts,
  features,
  charges,
  openLink
}) => {
  return (
    <div className="flex items-center justify-between border rounded-xl p-4 shadow-sm bg-white w-full max-w-5xl mx-auto mb-4">
      {/* Left section */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex items-center space-x-2 text-yellow-500">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          <span className="text-sm text-gray-500">({reviews} Reviews)</span>
        </div>
        <p className="text-sm text-gray-600">{accounts} Accounts</p>
        <a href={openLink} className="text-blue-600 underline text-sm">Open Demat A/c for FREE</a>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-sm mt-2">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-1">
              <span className="text-green-600">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Charges & Logo */}
      <div className="flex items-center space-x-6">
        {/* Charges */}
        <div className="text-sm space-y-1 text-right">
          {charges.map(({ title, value }, idx) => (
            <div key={idx} className="flex justify-between space-x-4">
              <span className="font-medium">{title}</span>
              <span className="text-gray-700">{value}</span>
            </div>
          ))}
        </div>

        {/* Logo */}
        <img src={logo} alt={name} className="w-16 h-16 object-contain rounded-md" />
      </div>
    </div>
  );
};

export default BrokerCard;
