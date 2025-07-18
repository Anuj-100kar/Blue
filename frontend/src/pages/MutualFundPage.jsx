import React from 'react'
import FilterSidebar from '../components/FilterSidebar'
import MutualFundCard from '../components/MutualFundCard'
import { mutualfunddata } from '../Data/IpoData'


const MutualFundPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <FilterSidebar />

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Large Cap Mutual Funds</h1>
        <p className="text-sm text-gray-600 mb-4">
          Large Cap Funds invest in companies that are in the top 100...
        </p>

        <div className="space-y-4">
          {mutualfunddata.map((fund, index) => (
            <MutualFundCard key={index} {...fund} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MutualFundPage
