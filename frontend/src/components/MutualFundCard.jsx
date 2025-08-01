import React, { useState } from 'react'
import { FaArrowUp, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MutualFundCard = ({
  logo,
  name,
  aum, expenseratio,
  cagr,
  performance,
  risk,
  composition,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-gray-100 border rounded-lg shadow p-4 w-full max-w-[1200px] mx-auto mb-6">
      {/* Top Summary Row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <div>
            <h2 className="font-semibold text-lg">{name}</h2>
            <div className="flex gap-8 text-sm text-gray-600">
              <div className="flex flex-col items-start">
                <span className="text-gray-500">AUM</span>
                <span className="font-semibold text-black">₹{aum}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-gray-500">Expense Ratio</span>
                <span className="font-semibold text-black">{expenseratio}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:text-right">
          <div className="text-sm text-gray-500">5Y CAGR</div>
          <div className="text-green-600 font-bold flex items-center justify-end">
            <FaArrowUp className="mr-1" /> {cagr}
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 text-gray-500 hover:text-gray-800"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-4 space-y-3 text-sm text-gray-700 border-t">
          <div className="flex items-start gap-2 mt-3">
            <span className="text-green-600">📈</span>
            <p><strong>Performance:</strong> {performance}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-500">🚨</span>
            <p><strong>Risk:</strong> {risk}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-orange-500">🎯</span>
            <p><strong>Composition:</strong> {composition}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MutualFundCard
