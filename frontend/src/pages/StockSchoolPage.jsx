import React from 'react'
import Header from '../components/Header'
import StockSchoolCard from '../components/StockSchoolCard'
import { stockschooldata } from '../Data/IpoData'

const StockSchoolPage = () => {
  return (
    <div>
      <div className="px-8 mt-4">
        <p className="text-sm text-gray-500 mb-2 cursor-pointer">
          <span className="hover:text-blue-500">Home</span> &gt;{' '}
          <span className="hover:text-blue-500">Stock School</span>
        </p>
      </div>
      <div className='px-6 lg:px-20 py-10 text-left space-y-2'>
        <h1 className='text-2xl font-bold text-gray-800'>Categories</h1>
        <p className='text-gray-600'>Begin your financial market education by exploring a variety of categories.</p>
        
      </div>
      <div className='px-6 lg:px-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
          stockschooldata.map((data,index)=>(
            <StockSchoolCard key={index} {...data}/>
          ))
        }
      </div>
    </div>
  )
}

export default StockSchoolPage
