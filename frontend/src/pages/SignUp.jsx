import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc'
import { assets } from '../assets/assets';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/admin/signup', { name, email, password })
    alert('signup successful');
    navigate('/login');

    console.log(res.data);
  }
  const [showpassword, setShowPassword] = useState(false);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='bg-white p-8 rounded shadow-lg w-full max-w-md'>
        <div className='flex justify-center items-center mb-4'>
          <img src={assets.logo} alt="" className='h-12' />
          <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
        </div>
        <div className='flex items-center justify-center space-y-3 font-semibold'>
          <h3 className='text-lg font-semibold text-center mb-3'>Create an account</h3>
        </div>


        {/*inputs */}
        <div className='space-y-5'>
          <div>
            <label className='block text-gray-600 mb-1'>Name</label>
            <input className='text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
              type="text" placeholder="enter the name..." onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div>
            <label className='block text-gray-600 mb-1'>Email Address</label>
            <input className='text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
              type="email" placeholder="enter the email..." onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className='relative'>
            <label className='block text-gray-600 mb-1'>Password</label>
            <input className='text-gray-500 border rounded pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
              type={showpassword ? "text" : "password"} placeholder='enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <div className='absolute top-9 right-3 cursor-pointer text-gray-400'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showpassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
            </div>
            <Link to={`/forgot-password`} className='text-sm text-blue-600 text-right mt-1 cursor-pointer'>
              Forgot Password?
            </Link>

          </div>
        </div>
        <div className='mt-6 space-y-4'>
          <p className='text-sm text-gray-500 '>
            By continuing,you agree to <span className='text-blue-500 cursor-pointer'>terms of service.</span>
          </p>

          <div className='flex items-center border border-gray-300 rounded mt-2 px-3 py-2' htmlFor="">
            <input type="checkbox" className='mr-2' />
            <span className='text-sm text-gray-700'>I'm not a robot</span>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="" className='ml-auto w-6 h-6' />
          </div>


          <button className='w-full bg-blue-700 text-white py-2 font-semibold rounded hover:bg-blue-800 transition-all'
            onClick={handlesignup}>
            Sign Up
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
            Already have an account? {''}
            <a className='text-blue-600 font-medium cursor-pointer' href='login'>
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
