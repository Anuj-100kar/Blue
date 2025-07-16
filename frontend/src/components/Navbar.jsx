import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center text-xs border-b shadow-sm top-0'>
            <div className='flex justify-content items-center'>
                <img className='w-15 h-20 ml-4' src={assets.logo} alt="" />
                <p className='font-bold text-xl ml-2'>BLUESTOCK</p>
            </div>

            <div>
                <ul className='flex space-x-8 '>
                    <li>PRODUCTS</li>
                    <li>PRICING</li>
                    <li>COMMUNITY</li>
                    <li>MEDIA</li>
                    <li>SUPPORT</li>
                </ul>
            </div>
            <div className='space-x-6 font-semibold'>
                <button className='border-1 hover:bg-blue-200 hover:text-white rounded px-3 py-2'>Sign In</button>
                <button className='border-1 hover:bg-blue-200 hover:text-white rounded px-3 py-2'>Sign Up Now</button>
            </div>
        </div>
    )
}

export default Navbar
