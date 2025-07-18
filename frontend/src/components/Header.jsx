import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center px-6 py-3 shadow-sm'>
        <div className='flex items-center space-x-3'>
            <img className='w-12 h-12 object-contain ' src={assets.logo} alt="logo" />
            <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
        </div>
        
            <ul className='hidden md:flex items-center space-x-5 text-xs font-medium text-gray-700'>
                <li className='hover:text-black cursor-pointer'>IPO</li>
                <li className='hover:text-black cursor-pointer'>COMMUNITY</li>
                <li className='hover:text-black cursor-pointer'>PRODUCTS</li>
                <li className='hover:text-black cursor-pointer'>BROKERS</li>
                <li className='hover:text-black cursor-pointer flex items-center gap-1'>LIVE NEWS <span className=' bg-blue-500 text-white hover:bg-blue-600 text-[10px] px-1 py-[2px] rounded-sm '>NEW</span></li>
            </ul>
        
        <div className='flex justify-center items-center text-sm space-x-3'>
            <button className='text-gray-600 bg-gray-100 px-4 py-1.5 rounded hover:bg-gray-200'>Sign In</button>
            <button className='text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded '>Sign Up Now</button>
            <img className='h-4 w-4 ml-2 cursor-pointer' src={assets.gripvertical} alt="" />
        </div>
      
    </div>
  )
}

export default Header
