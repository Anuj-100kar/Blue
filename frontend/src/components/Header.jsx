import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Header = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handlegripclick = () => {
        setShowDropdown((prev) => !prev);
    }
    return (
        <header className='w-full flex justify-between items-center px-6 md:px-12 lg:px-20 py-2 shadow-sm'>
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

            <div className='flex justify-center items-center text-sm space-x-3'>
               <div className='hidden lg:flex space-x-3'>
                 <button onClick={() => navigate('/login')} className=' text-gray-600 bg-gray-100 px-4 py-1.5 rounded hover:bg-gray-200'>Sign In</button>
                <button onClick={() => navigate('/sign-up')} className=' text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded '>Sign Up Now</button>
               </div>
                <div className='relative'>
                    <img className='h-4 w-4 ml-2 cursor-pointer' onClick={handlegripclick} src={assets.grip} alt="" />
                    {
                        showDropdown && (
                            <div className='absolute right-0 mt-2 w-40 bg-white rounded shadow-md'>
                                <Link to="/user/sign-up" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>User Login</Link>
                                <Link to="/login" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Admin Login</Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </header>
    )
}

export default Header
