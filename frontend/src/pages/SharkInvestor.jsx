import React from 'react'
import InvestorCard from '../components/InvestorCard';
import { investors } from '../Data/IpoData';

const SharkInvestor = () => {
  return (
    <>
    <p className="text-sm text-gray-500 mb-2 mt-4 ml-32 cursor-pointer">
          <span className="hover:text-blue-500">Home</span> &gt;{' '}
          <span className="hover:text-blue-500">Shark Investor</span>
        </p>
    <div className="px-4 py-8 max-w-7xl mx-auto">
      
      <h1 className="text-2xl font-bold mb-4">Shark Investors</h1>
      <p className="text-gray-600 mb-6">Look Who the pro investors trust! Learn from the big shots and their historical stocks.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {investors.map((investor, index) => (
          <InvestorCard key={index} {...investor} />
        ))}
      </div>
    </div>
    </>
  )
}

export default SharkInvestor
