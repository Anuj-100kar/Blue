import React from 'react'
import { brokers } from '../Data/IpoData';
import { useNavigate } from 'react-router-dom';

const BrokersTable = () => {
  const navigate=useNavigate();
  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Compare and choose <br />
          <span className="text-blue-600">Best Stock Broker for you</span>
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-4">
          <select className="border px-4 py-2 rounded-md w-full sm:w-[48%]">
            <option value="">Select Broker 1</option>
            <option value="zerodha">Zerodha</option>
            <option value="groww">Groww</option>
            <option value="upstox">Upstox</option>
            <option value="angelone">Angel One</option>
            {/* Add more brokers as needed */}
          </select>

          <select className="border px-4 py-2 rounded-md w-full sm:w-[48%]">
            <option value="">Select Broker 2</option>
            <option value="zerodha">Zerodha</option>
            <option value="groww">Groww</option>
            <option value="upstox">Upstox</option>
            <option value="angelone">Angel One</option>
            {/* Add more brokers as needed */}
          </select>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={()=>navigate('/compare-brokers')}
          >
            Compare
          </button>
        </div>
      </div>
    </section>
  )
}

export default BrokersTable
