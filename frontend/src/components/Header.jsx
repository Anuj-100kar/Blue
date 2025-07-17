import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='w-full flex justify-evenly items-center px-4 py-1'>
        <div className='flex justify-center items-center space-x-3'>
            <img className='w-14 h-14 ' src={assets.logo} alt="logo" />
            <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
        </div>
        <div >
            <ul className='flex justify-center items-center space-x-3 text-xs text-gray-700'>
                <li className='px-4 py-1 text-center'>IPO</li>
                <li className='px-4 py-1 text-center'>COMMUNITY</li>
                <li className='px-4 py-1 text-center'>PRODUCTS</li>
                <li className='px-4 py-1 text-center'>BROKERS</li>
                <li className='px-4 py-1 text-center'>LIVE NEWS <span className=' bg-blue-500 text-white hover:bg-blue-600 text-xs px-0.2 py-0.2 '>NEW</span></li>
            </ul>
        </div>
        <div className='flex justify-center items-center text-xs space-x-4'>
            <button className='text-gray-500 bg-gray-100 px-5 py-1.5 rounded '>Sign In</button>
            <button className='text-white bg-blue-600 hover:bg-blue-700 px-5 py-1.5 rounded '>Sign Up Now</button>
            <img className='h-4 w-4' src={assets.gripvertical} alt="" />
        </div>
      
    </div>
  )
}

export default Header
