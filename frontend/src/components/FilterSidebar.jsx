import React from 'react';

const FilterSidebar = () => {
  return (
     <div className="w-full sm:w-64 p-4 border bg-white rounded-lg shadow-sm space-y-4">
      {["Asset Category", "Risk", "AMCs", "Rating", "Other"].map((filter, i) => (
        <div key={i}>
          <label className="text-sm font-medium">{filter}</label>
          <select className="w-full border p-2 mt-1 rounded">
            <option value="">Select</option>
            {/* Options can be mapped */}
          </select>
        </div>
      ))}
    </div>
  );
}

export default FilterSidebar;
