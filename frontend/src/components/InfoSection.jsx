import React from 'react'
import { FaEdit } from 'react-icons/fa';

const InfoSection = ({ title, fields }) => {
  return (
       <div className="bg-[#1E293B] rounded-lg p-4 mb-6 text-white">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="text-sm text-blue-400 flex items-center gap-1 hover:underline">
          <FaEdit /> Edit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {fields.map(({ label, value }, idx) => (
          <div key={idx}>
            <p className="text-gray-400">{label}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection
