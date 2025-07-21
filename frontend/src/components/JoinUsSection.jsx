import React from 'react'

const JoinUsSection = () => {
  return (
     <div className="bg-blue-600 text-white rounded-xl p-8 md:p-12 my-16 max-w-7xl mx-auto text-start">
      <h3 className="text-2xl font-bold mb-4">Want to join us?</h3>
      <p className="mb-4">
        We’re taking complicated stuff and making it super simple. Our teams are full of smart and savvy folks working on challenging tasks.
      </p>
      <p className="mb-6">
        And we’re always looking for customer-obsessed people. Think you’re customer-focused enough? Write to us at <a href="mailto:hello@bluestock.in" className="underline hover:text-gray-200">hello@bluestock.in</a>.
      </p>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
        APPLY NOW
      </button>
    </div>
  )
}

export default JoinUsSection
