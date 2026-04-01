import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const UserForgotPassword = () => {
   const [email, setEmail] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/user-auth/forgotpassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message);

    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>

      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>

        {/* Logo */}
        <div className='flex justify-center items-center space-x-2 mb-3'>
          <img src={assets.logo} alt="logo" className='h-10' />
          <h2 className='text-2xl font-bold text-black'>BLUESTOCK</h2>
        </div>

        {/* Heading */}
        <div className='mb-4'>
          <h2 className='font-semibold text-black text-lg'>Forgot Password?</h2>
          <p className='text-sm text-gray-500'>
            Enter your email address to get the password reset link.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleForgot} className='space-y-4'>

          <div>
            <label className='block text-gray-600 mb-1'>Email Address</label>
            <input
              type="email"
              placeholder='hello@bluestock.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className='w-full bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all'
          >
            Send Reset Link
          </button>

          {/* Back */}
          <Link
            to="/user/login"
            className='block text-center bg-gray-100 text-gray-600 py-2 rounded hover:bg-gray-200'
          >
            Back to Login
          </Link>

        </form>
      </div>
    </div>
  );
}

export default UserForgotPassword
