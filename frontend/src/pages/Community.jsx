import React from 'react'
import Header from '../components/Header'
import Hero3 from '../components/Hero3'
import BenefitSection from '../components/BenefitSection'
import SupportSection from '../components/SupportSection'

const Community = () => {
  return (
    <>
        <Header/>
        <div className="px-8 mt-4">
        <p className="text-sm text-gray-500 mb-2 cursor-pointer">
          <span className="hover:text-blue-500">Home</span> &gt;{' '}
          <span className="hover:text-blue-500">Community</span>
        </p>
      </div>
        <Hero3/>
        <BenefitSection/>
        <SupportSection/>
    </>
  )
}

export default Community
