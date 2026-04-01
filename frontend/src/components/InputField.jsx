import React from 'react';

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  options = []
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select {label}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-3 py-2"
          placeholder={`Enter ${label}`}
        />
      )}
    </div>
  );
};

export default InputField;