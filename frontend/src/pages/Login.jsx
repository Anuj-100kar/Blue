import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='bg-white p-8 rounded shadow-lg w-full max-w-md'>
        <div className='flex flex-col items-center mb-4'>
          <img src={assets.logo} alt="" className='h-16'/>
          <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
        </div>
      
        
          {/*inputs */}
          <div className='space-y-4'>
            <div>
              <label className='block text-gray-600 mb-1'>Email Address</label>
              <input className='text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
                type="email" placeholder="enter the email..." />
            </div>
            <div className='relative'>
              <label className='block text-gray-600 mb-1'>Password</label>
              <input className='text-gray-500 border rounded pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
                type={showpassword ? "text" : "password"} placeholder='enter password' />
              <div className='absolute top-9 right-3 cursor-pointer text-gray-400'
                onClick={() => setShowPassword((prev) => !prev)}>
                {showpassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
              </div>
              <div className='text-sm text-blue-600 text-right mt-1 cursor-pointer'>
                Forgot Password?
              </div>
            </div>
          </div>
          <div className='mt-6 space-y-4'>
            <div className='border border-gray-300 rounded px-3 py-2'>
              <label className='flex items-center space-x-2' htmlFor="">
                <input type="checkbox" />
                <span>I'm not a robot</span>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="" className='ml-auto' />
              </label>
            </div>
            <label className='flex items-center space-x-2 text-sm' htmlFor="">
              <input type="checkbox" />
              <span>keep me signed in</span>
            </label>
            <button className='w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition-all'>
              Login
            </button>

          </div>
          {/*or google login....... */}
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600 mb-2'>or sign in with</p>
            <button className='w-full border flex items-center justify-center py-1 rounded text-gray-700 hover:bg-gray-100'>
              <FcGoogle className="mr-2" size={20} />
              Continue with Google
              </button>
          </div>

          {/*create account */}
          <div className='mt-4 text-center'>
              <p className='text-sm text-gray-600'>
                Don't have an account? {''}
                <span className='text-blue-600 font-medium cursor-pointer'>
                  create an account
                </span>
              </p>
          </div>
        </div>
      </div>
    
  )
}

export default Login
