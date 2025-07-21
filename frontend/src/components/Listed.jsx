import React from 'react'
import { newlistedipos } from '../Data/IpoData'
import LatestIpoCard from './LatestIpoCard'
import { useLocation,Link } from 'react-router-dom'

const Listed = () => {
  const location=useLocation();
  const isFullPage=location.pathname==='/bluestock/ipo/listed-ipo';

  return (
    <section className='py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h3 className='text-gray-800 text-xl font-semibold '>New Listed</h3>
          <p className='text-gray-600 mt-1 text-sm max-w-2xl'>Companies that have been listed recently through an IPO. Find their listing gains and returns here.</p>
        </div>
         {!isFullPage && (
            <Link
              to='/bluestock/ipo/listed-ipo'
              className='text-blue-600 text-sm font-semibold hover:underline'
            >
              View All
            </Link>
          )}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                          {
                              newlistedipos.map((ipo,index)=>(
                                  <LatestIpoCard key={index} {...ipo}/>
                              ))
                          }
                     </div>   
    </div>
    </section>
    
  )
}

export default Listed
