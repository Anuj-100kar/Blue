import React from 'react'
import { iponews,ipoanalysis } from '../Data/IpoData'

const NewsSection = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* IPO News */}
          <div className="bg-gray-50 p-4 shadow rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">IPO News</h4>
            {iponews.map((news, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-medium text-gray-700">{news.title}</p>
                <span className="text-xs text-gray-500">{news.time}</span>
              </div>
            ))}
          </div>

          {/* IPO Analysis */}
          <div className="bg-gray-50 p-4 shadow rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">IPO Analysis</h4>
            {ipoanalysis.map((news, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-medium text-gray-700">{news.title}</p>
                <span className="text-xs text-gray-500">{news.time}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default NewsSection
