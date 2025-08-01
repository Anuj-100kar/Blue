import React from 'react'
import FilterSidebar from '../components/FilterSidebar'
import MutualFundCard from '../components/MutualFundCard'
import { mutualfunddata } from '../Data/IpoData'
import LargeCapSection from '../components/LargeCapSection'
import Header from '../components/Header'


const MutualFundPage = () => {
  return (
    <>
    <div className="px-8 mt-4">
        <p className="text-sm text-gray-500 mb-2 cursor-pointer">
          <span className="hover:text-blue-500">Home</span> &gt;{' '}
          <span className="hover:text-blue-500">Mutual Fund</span>
        </p>
      </div>
    <LargeCapSection/>
    <div className="space-y-5 gap-6 px-8 py-6 bg-white min-h-screen">
      {/* Sidebar */}
      {/* Main Content */}

      
      <div className='w-full'>
        <p className='text-2xl text-base font-medium text-gray-800'>Overview of Large Cap Mutual Funds</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <div >
          <FilterSidebar />
        </div>


        <div className="space-y-4 w-full lg:w-3/4">
          {mutualfunddata.map((fund, index) => (
            <MutualFundCard key={index} {...fund} />
          ))}
        </div>


      </div>
    </div>
    </>
  )
}

export default MutualFundPage
