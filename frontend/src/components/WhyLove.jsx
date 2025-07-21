import React from 'react'
import { FaChartPie, FaUsers, FaChartLine } from 'react-icons/fa';


const WhyLove = () => {
  return (
      <section className="px-4 py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why do traders love <span className="text-blue-600">Bluestock</span>?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Features */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center space-x-4">
              <FaChartPie className="text-blue-500 text-3xl" />
              <span className="text-lg font-medium">Smart Market Analytics</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUsers className="text-blue-500 text-3xl" />
              <span className="text-lg font-medium">Strong Community Support</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaChartLine className="text-blue-500 text-3xl" />
              <span className="text-lg font-medium">Powerful Stock Tools</span>
            </div>
          </div>

          {/* Right Side: Graphic */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/chart-graphic.png" // <- replace with actual image path
              alt="Analytics chart"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLove
