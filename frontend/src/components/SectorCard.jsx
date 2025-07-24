import React from 'react'
import { assets } from '../assets/assets'
import { sectordata } from '../Data/IpoData'

const SectorCard = ({icon,title,description,listedCount,companies}) => {
  return (
     <div className="w-[300px] min-h-[400px] bg-gradient-to-b from-blue-200 to-white border border-blue-400 rounded-xl p-4 shadow-md flex flex-col items-center text-center space-y-2">
        {/* Icon */}
        <div className='mb-14 text-center flex flex-col items-center gap-1'>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center items-center shadow-sm">
        <img src={icon} alt={title} className="w-20 h-20" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>
        </div>
      

      {/* Tag */}
      <span className="text-green-700 text-xs bg-green-100 px-2 py-1 rounded-full font-medium ">
        {listedCount} Listed Companies
      </span>

      {/* Company size counts */}
      <div className="flex justify-between w-full text-xs text-gray-700 font-medium border-t pt-2">
        {Object.entries(companies).map(([size, count]) => (
          <div key={size} className="flex flex-col items-center">
            <span className="text-[10px] text-gray-500">{size.toUpperCase()}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>

      {/* Details Button */}
      <button className="mt-8 bg-blue-500 text-white text-sm px-4 py-1 rounded hover:bg-blue-600 ">
        Details
      </button>
    </div>
  )
}

export default SectorCard
