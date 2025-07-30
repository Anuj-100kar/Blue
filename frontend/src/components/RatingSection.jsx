import React from 'react'
import { assets } from '../assets/assets'

const RatingSection = () => {
  return (
    <div className="flex justify-around items-center gap-4 my-4 mb-4">
      <div className="w-1/3 flex flex-col  p-4 shadow-md bg-green-50 rounded-lg items-center ">
      <img src={assets.angleone} className='w-36 h-36 object-contain' alt="" />
        <h3 className="font-bold text-lg">Angel One</h3>
        <p className="text-3xl font-semibold">4.7</p>

        <p className='text-md font-semibold mt-12'>Trust Factor</p>
        <p className='text-md font-semibold '>Ease of Use</p>
        <p className='text-md font-semibold '>Technology</p>

        <button className='bg-green-800 text-white text-xs font-bold mt-6 px-4 py-1.5 rounded-md text-center'>Open Demat Account</button>
        {/* Stars, category label */}
      </div>
      <div className="w-1/3 flex flex-col items-center p-4 shadow-md bg-blue-50 rounded-lg items-center">
      <img src={assets.zerodha} className='w-36 h-36 object-contain' alt="" />
        <h3 className="font-bold text-lg">Zerodha</h3>
        <p className="text-3xl font-semibold">4.6</p>

         <p className='text-md font-semibold mt-12'>Trust Factor</p>
        <p className='text-md font-semibold '>Ease of Use</p>
        <p className='text-md font-semibold '>Technology</p>

         <button className='bg-green-800 text-white text-xs font-bold mt-6 px-4 py-1.5 rounded-md text-center'>Open Demat Account</button>
      </div>
    </div>

  )
}

export default RatingSection
