import React from 'react'
import InputField from './InputField'
import { assets } from '../assets/assets'

const RegisterForm = () => {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-md p-6 ">
      <h2 className="text-xl font-semibold mb-4">IPO Information</h2>
      <p className='text-gray-600 text-sm mb-2'>Enter IPO Details</p>
      <hr className='mb-4' />
      <h3 className='text-gray-800 font-bold mb-3'>Company Logo</h3>
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6'>
        <img src={assets.nse} className='w-8 h-8' alt="" />
        <p className='text-gray-600'><strong>NSE India</strong> <br />Tech Lead <br />Dyne</p>
        <div className='flex gap-2 sm:gap-3'>
          <button className='bg-blue-800 text-white text-sm sm:text-xs px-3 sm:px-1 py-2 sm:py-0.5 rounded-md'>Upload Logo</button>
          <button className='border border-blue-800 text-blue-700 rounded-md text-sm sm:text-xs px-3 sm:px-1 py-2 sm:py-0.5'>Delete</button>
        </div>

      </div>


      {/* Section 1: IPO Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Company Name" />
        <InputField label="Price Band" />
        <InputField label="Open" />
        <InputField label="Close" />
        <InputField label="Issue Size" />
        <InputField label="Issue Type" type="select" options={['Book Built', 'Fixed Price']} />
        <InputField label="Listing Date" type="date" />
        <InputField label="Status" type="select" options={['Upcoming', 'Ongoing', 'Listed']} />
      </div>

      <hr className="my-6" />

      {/* Section 2: New Listed IPO Details */}
      <h2 className="text-xl font-semibold mb-4">New Listed IPO Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="IPO Price" />
        <InputField label="Listing Price" />
        <InputField label="CMP" />
        <InputField label="Current Return (%)" />
        <InputField label="GMP" />
        <InputField label="GMP PDF Link" />
        <InputField label="Listing Date" type="date" />
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Register
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default RegisterForm
