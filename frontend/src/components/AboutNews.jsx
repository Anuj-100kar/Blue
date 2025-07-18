import React from 'react'

const AboutNews = () => {
  return (
     <section className="px-8 py-16 bg-white text-center">
     
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Bluestock is mobile app for stock market<br/> learning, analytics & club
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10">
        We are passionate about helping you succeed in the stock <br/>market by providing cutting-edge tools and a supportive<br/> community of traders.<br/> Join us on this journey, and let’s make your stock trading<br/> experience better.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-blue-600 text-white py-6 px-4 rounded-xl">
          <p className="text-3xl font-bold mb-2">5 Thousand</p>
          <p className="text-lg">Customers</p>
        </div>
        <div className="bg-blue-600 text-white py-6 px-4 rounded-xl">
          <p className="text-3xl font-bold mb-2">20+</p>
          <p className="text-lg">Team Members</p>
        </div>
        <div className="bg-blue-600 text-white py-6 px-4 rounded-xl">
          <p className="text-3xl font-bold mb-2">4.9</p>
          <p className="text-lg">Rating</p>
        </div>
      </div>

      {/* News Section */}
      <h3 className="text-xl font-semibold mb-6">Traders Talk</h3>
      <h4 className="text-2xl font-bold mb-10">Recent News</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-left">
          <h5 className="text-red-500 font-semibold mb-1">Business Standard</h5>
          <p className="text-sm text-gray-700">
            $3.20 billion AUM of active equity market trades surge.
          </p>
        </div>
        <div className="text-left">
          <h5 className="text-black font-semibold mb-1">Medium</h5>
          <p className="text-sm text-gray-700">
            Bluestock is a mobile app for stock market learning, analytics and club...
          </p>
        </div>
        <div className="text-left">
          <h5 className="text-blue-500 font-semibold mb-1">Businessworld</h5>
          <p className="text-sm text-gray-700">
            Mutual funds experience record surge in contributions, reaching 12,000 Cr in Q1.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutNews
