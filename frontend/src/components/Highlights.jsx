import React from 'react'
import {highlightdata} from '../Data/IpoData';
import { FaCheckCircle } from 'react-icons/fa';


const Highlights = () => {
  return (
     <section className="px-4 py-16 bg-white max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Bluestock Highlights</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {highlightdata.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-6 shadow-md bg-gray-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{item.title}</h3>
            <ul className="space-y-3">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-700">
                  <FaCheckCircle className="text-green-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights
