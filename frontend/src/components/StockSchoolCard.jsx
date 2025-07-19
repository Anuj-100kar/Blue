import React from 'react'

import { FaEye } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md'


const StockSchoolCard = ({
  icon, title, description, modules, views, link,
}) => {
  return (
    <div className='bg-white rounded-lg border shadow-sm p-6 w-full max-w-2xl flex items-start gap-4'>
      <div className='min-w-[80px]'>
        <img src={icon} alt="" className='h-16 w-16 object-contain mt-8' />
      </div>
      <div className='flex-1 space-y-2'>
        <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
        <p className='text-sm text-gray-600'>{description}</p>
        <div className='flex justify-between text-sm text-gray-600'>
          <div className='flex items-center gap-2'>
            <MdMenuBook className='text-orange-500 ' />
            <span>{modules} Modules</span></div>

          <div className='flex items-center gap-2'>
            <FaEye className='mt-1 text-orange-500' />
            <span>{views.toLocaleString()} views</span>
          </div>
        </div>

        <div className='border-t'>
          <a href={link} className=' text-blue-500 text-sm font-medium '>
            View Details &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default StockSchoolCard
