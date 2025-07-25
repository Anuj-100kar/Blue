import React from 'react'
import { assets } from '../assets/assets'

const ForgotPassword = () => {
    const handleforgot=async(e)=>{
        e.preventDefault();
        const res=await fetch('http://localhost:5000/api/admin-auth/forgotpassword',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email}),
        });

        const data=await res.json();
        alert(data.message);
    };
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
                <div className='flex justify-center items-center space-x-2 mb-3'>
                    <img src={assets.logo} alt="logo" className='h-10' />
                    <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
                </div>
                <div className=' items-center mb-4'>
                    <h2 className='font-semibold text-black text-lg '>Forgot Password?</h2>
                    <p className='text-sm text-gray-500'>
                        Enter your email address to get the password reset link.
                    </p>
                </div>
                <div className='space-y-4'>
                    <div>
                        <label htmlFor="" className='block text-gray-600 mb-1'>Email Address</label>
                        <input className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder='hello@bluestock.com' />
                    </div>
                    
                    <button className='w-full bg-blue-700 text-white px-4 py-2 rounded  hover:bg-blue-800 cursor-pointer transition-all'>Password Reset</button>
                    <button className='w-full bg-gray-100 text-gray-400 py-2 rounded'>Back to login</button>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword
