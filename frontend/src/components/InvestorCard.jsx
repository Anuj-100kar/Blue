import React from 'react'

const InvestorCard = ({ name, image, description, link }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 w-full max-w-xs text-center space-y-3">
      <img
        src={image}
        alt={name}
        className="w-52 h-52 rounded-sm mx-auto border"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-start text-gray-600">{description}</p>
      <a
        href={link}
        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
      >
        View Holdings
      </a>
    </div>
  )
}

export default InvestorCard
