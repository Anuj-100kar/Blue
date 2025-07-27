import React from 'react'

const Hero4 = () => {
  return (
    <section className="text-start px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Free & Open <br />
        <span className="text-blue-600">Stock Market Analytics</span> <br />
        For GenZ!
      </h1>
      <p className='text-gray-500 text-sm mt-3'>Thousands of traders and investors in India use our<br />
        stable and reliable mobile app regularly.</p>
      <p className="mt-6 text-sm text-gray-600">
        <strong>Get early access</strong>
      </p>
      <div className="mt-2">
        <input
          type="tel"
          placeholder="+91 | Enter your mobile number"
          className="w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />
      </div>
    </section>
  )
}

export default Hero4
