import React from 'react'
import { FiBell,FiSearch } from 'react-icons/fi'
import { assets } from '../assets/assets'

const DashboardHeader = () => {
  return (
    <div className='w-full flex items-center justify-between p-2 bg-white shadow-sm rounded mb-4'>
     <div className='relative w-[300px]'>
         <input type="text"
      placeholder='search'
      className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <FiSearch className='absolute right-3 top-2.5 text-gray-700' size={18}/>
     </div>
     <div className='flex items-center space-x-5'>
        <img src={assets.profile}  alt="" className='w-6 h-6 rounded-full object-cover cursor-pointer'/>
        <span className='text-gray-600 text-sm font-semibold'>Hi , Admin</span>
        <FiBell size={18} className='text-gray-600 hover:text-blue-600 cursor-pointer'/>
     </div>
    </div>
  )
}

export default DashboardHeader
