import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FilterSidebar = () => {
  return (
     <div className="w-full sm:w-64 p-4 border bg-gray-100 rounded-lg shadow-sm space-y-4">
      <p className='text-sm font-bold'>Fund Categories</p>
      {["Equity", "Debt", "Hybrid", "Commodity", "Other"].map((filter, i) => (
        <div key={i} className='flex justify-between items-center border-r py-2 cursor-pointer hover:text-blue-500'>
          <label className="text-sm font-medium">{filter}</label>
          <FaChevronDown className='text-gray-600 text-xs'/>
        </div>
      ))}
    </div>
  );
}

export default FilterSidebar;
