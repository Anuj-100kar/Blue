import React from 'react'
import { upcomingipos } from '../Data/IpoData';
import IpoCard from './IpoCard';

const UpComing = () => {
  return (
    <section className='py-10 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Upcoming</h3>
            <p className='text-sm text-gray-600 mt-1 max-w-2xl'>
              Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later on.
            </p>
          </div>
          <button className='text-blue-600 font-medium text-xs'>View All</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            upcomingipos.map((ipo, index) => (
              <IpoCard key={index} {...ipo} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default UpComing
