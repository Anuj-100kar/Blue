import React from 'react'
import TechnicalCard from '../components/TechnicalCard'
import { technicaldata } from '../Data/IpoData'
import Header from '../components/Header'

const Technical = () => {
  return (
    <div>
      <div className="px-8 mt-4">
        <p className="text-sm text-gray-500 mb-2 cursor-pointer">
          <span className="hover:text-blue-500">Home</span> &gt;
          <span className="hover:text-blue-500">Stock School</span> &gt;
          <span className="hover:text-blue-500">Technical Analysis</span>
        </p>
      </div>
      <div >
        <h1 className="text-2xl lg:text-3xl font-bold  text-gray-800 mt-10 mb-6 ml-8">
          Technical Analysis
        </h1>
      </div>
      <div className='px-4 lg:px-20 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          technicaldata.map((data, index) => (
            <TechnicalCard key={index} {...data} />
          ))
        }
      </div>

    </div>
  )
}

export default Technical
