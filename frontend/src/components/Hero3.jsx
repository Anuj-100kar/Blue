import React from 'react'

const Hero3 = () => {
  return (
     <section className="flex flex-col md:flex-row items-center justify-evenly px-8 py-16 bg-white">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          The Most Active<br/> Community of <br/>Traders & Investors
        </h1>
        <p className="text-gray-600 mb-6">
          Join now to interact with thousands of active traders and <br/> investors to learn and share your knowledge on out<br/> buzzing forum.
        </p>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">
          Join the Community
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10">
        <img src={assets.community1} alt="Community Chat" className="w-full h-[450px] max-w-md" />
      </div>
    </section>
  )
}

export default Hero3
