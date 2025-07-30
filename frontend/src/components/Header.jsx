import React from 'react'
import {Link} from 'react-router-dom';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center px-6 lg:px-20 py-2 shadow-sm'>
        <div className='flex items-center space-x-3'>
            <img className='w-12 h-12 object-contain ' src={assets.logo} alt="logo" />
            <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
        </div>
        
            <ul className='hidden md:flex items-center space-x-5 text-xs font-medium text-gray-700'>
                <li className='hover:text-black cursor-pointer'><Link to="/bluestock/ipo" className='hover:text-black'>IPO</Link></li>
                <li className='hover:text-black cursor-pointer'><Link to="/bluestock/community" className='hover:text-black'>COMMUNITY</Link></li>
                <li className='hover:text-black cursor-pointer'><Link to="/bluestock/products" className='hover:text-black'>PRODUCTS</Link></li>
                <li className='hover:text-black cursor-pointer'><Link to="/bluestock/brokers" className='hover:text-black'>BROKERS</Link></li>
                <li className='hover:text-black cursor-pointer flex items-center gap-1'><Link to="/bluestock/live-news">LIVE NEWS</Link><span className=' bg-blue-500 text-white hover:bg-blue-600 text-[10px] px-1 py-[1px] rounded-sm '>NEW</span></li>
            </ul>
        
        <div className='hidden md:flex justify-center items-center text-sm space-x-3'>
            <button className=' text-gray-600 bg-gray-100 px-4 py-1.5 rounded hover:bg-gray-200'>Sign In</button>
            <button className=' text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded '>Sign Up Now</button>
            <img className='h-4 w-4 ml-2 cursor-pointer required' src={assets.grip} alt="" />
        </div>
      
    </header>
  )
}

export default Header
