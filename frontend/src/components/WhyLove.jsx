import React from 'react'
import { FaChartPie, FaUsers, FaChartLine } from 'react-icons/fa';
import { assets } from '../assets/assets';


const WhyLove = () => {
  return (
    <section className="px-4 py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-start mb-2">
          Why do traders love <span className="text-blue-600">Bluestock</span>?
        </h2>
        <p className='text-gray-500 text-sm mb-10'>Bluestock caters to traders looking to enhance <br />
          their technical analysis skills, providing a user-friendly<br />
          environment to interpret and leverage charts effectively <br />
          for strategic decision-making in the financial markets</p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Features */}
          <div className="flex flex-row space-x-6">
            <div className='flex flex-col items-center'>
              <img src={assets.analytics} className='w-32 h-32 object-contain' alt="" />
              <p>Analytics</p>
            </div>
             <div className='flex flex-col items-center'>
              <img src={assets.blogs} className='w-32 h-32 object-contain' alt="" />
              <p>Blogs</p>
            </div>
             <div className='flex flex-col items-center'>
              <img src={assets.videos} className='w-32 h-32 object-contain' alt="" />
              <p>Videos</p>
            </div>
          </div>

          {/* Right Side: Graphic */}
          <div className="flex-1 flex flex-col  justify-center">
            <h2 className='text-3xl font-bold'>All things finance,right here</h2>
            <p>Master the art of investing and secure your financial future<br/> with Bluestock learning resources.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLove
