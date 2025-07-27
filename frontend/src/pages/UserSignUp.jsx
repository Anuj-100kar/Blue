import React from 'react'
import { useState,useEffect } from 'react'
import { assets } from '../assets/assets';

const UserSignUp = () => {
  const [darkMode , setDarkMode]=useState(true);

  useEffect(()=>{
    const html=document.documentElement;
    if(darkMode){
      html.classList.add("dark");
    }else{
      html.classList.remove("dark");
    }
  },[darkMode]);

  return (
    <div className="min-h-screen flex font-sans bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="absolute top-36 right-28">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-sm rounded border border-gray-400 dark:border-gray-600 hover:opacity-80"
        >
          {darkMode ? " Light Mode" : " Dark Mode"}
        </button>
      </div>
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Navigate the <br /> Markets with <br /> Confidence
        </h1>

        <div className="flex flex-wrap gap-3 mb-10">
          <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
            Advanced Technical Analysis/Charting Tools
          </button>
          <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
            Community Feeds
          </button>
          <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
            Customizable UI for Your Trading Style
          </button>
          <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
            Customer Support
          </button>
        </div>

        <div className="text-sm text-gray-400">
          <p className="italic">
            Game changing trading software that helped me{" "}
            <strong className="text-white">analyze market trends</strong> and{" "}
            <strong className="text-white">make better decisions</strong>.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <img
              src={assets.prof}
              alt="profile"
              className="rounded-full w-8 h-8"
            />
            <span className="text-xs text-white">
              Aaron O'Donnell — <span className="text-cyan-400">Pro Account</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <div className="w-full max-w-md">
          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-black text-white dark:bg-white dark:text-black  px-4 py-2 rounded font-medium">
              Sign up with Google
            </button>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded font-medium">
              Sign up with Facebook
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 rounded bg-gray-800 text-white border border-gray-700"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 rounded bg-gray-800 text-white border border-gray-700"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
            <p className="text-xs text-gray-500">
              At least 8 characters, with numbers and symbols.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-cyan-500" />
              <label>Remember this device</label>
            </div>

            <button className="w-full bg-cyan-500 text-black font-semibold py-2 rounded hover:bg-cyan-400 transition">
              Create Account
            </button>

            <p className="text-xs text-gray-500 mt-2">
              By signing up, you agree to our{" "}
              <span className="underline text-white">terms of service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp
