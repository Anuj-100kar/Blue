import React from 'react';

const InputField = ({ label, type = "text", options = [] }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      {type === "select" ? (
        <select className="border border-gray-300 rounded px-3 py-2">
          {options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="border border-gray-300 rounded px-3 py-2"
          placeholder={`Enter ${label}`}
        />
      )}
    </div>
  );
};

export default InputField;
