import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { assets } from '../assets/assets'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        email, password
      });

      localStorage.setItem('adminToken', res.data.token)

      navigate('/admin/dashboard')
      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='bg-white p-8 rounded shadow-lg w-full max-w-md sm:max-w-sm'>
        <div className='flex flex-col items-center mb-4'>
          <img src={assets.logo} alt="" className='h-16 sm:h-12' />
          <h2 className='text-2xl sm:text-xl font-bold text-black'>BLUESTOCK</h2>
        </div>


        {/*inputs */}
        <div className='space-y-4'>
          <div>
            <label className='block text-gray-600 mb-1 text-sm'>Email Address</label>
            <input className='text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
              type="email" placeholder="enter the email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <div className='relative'>
            <label className='block text-gray-600 mb-1'>Password</label>
            <input className='text-gray-500 border rounded pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-3 py-2'
              type={showpassword ? "text" : "password"} placeholder='enter password'
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
            <div className='absolute top-9 right-3 cursor-pointer text-gray-400'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showpassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
            </div>
            <div>
              <Link to={`/forgot-password`} className='text-sm text-blue-600  cursor-pointer'>
                Forgot Password?
              </Link>
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
          <button type='submit' className='w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition-all'
            onClick={handlelogin}>
            Login
          </button>

        </div>
        {/*or google login....... */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600 mb-2'>or sign in with</p>
          <button className='w-full border flex items-center justify-center gap-2 text-sm py-1 rounded text-gray-700 hover:bg-gray-100'>
            <FcGoogle className="mr-2" size={20} />
            Continue with Google
          </button>
        </div>

        {/*create account */}
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Don't have an account? {''}e
            <a className='text-blue-600 font-medium cursor-pointer' href='/sign-up'>
              create an account
            </a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login
