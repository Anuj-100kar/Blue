import React from 'react'

const HeatMap = () => {

    const heatMapData = [
  { industry: 'Information Technology', color: 'bg-green-400' },
  { industry: 'Financials', color: 'bg-red-400' },
  { industry: 'Consumer Staples', color: 'bg-green-600' },
  // Add more as needed
];
  return (
       <div className="bg-[#1E293B] p-4 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-semibold mb-4">Heat Map</h2>
      <div className="grid grid-cols-3 gap-4">
        {heatMapData.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-sm">{item.industry}</h3>
            <div className="grid grid-cols-5 gap-1">
              {[...Array(15)].map((_, idx) => (
                <div key={idx} className={`w-4 h-4 ${item.color} rounded-sm`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeatMap
