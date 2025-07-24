import React from 'react'

const BenefitSection = () => {
  return (
     <section className="flex flex-col md:flex-row items-center justify-evenly px-8 py-16 bg-white">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-4">
              be a part of trading & <br/>investments club
            </h1>
            <div className='space-y-3'>
                <p>rich environment for <br/>knowledge exchange.</p>
                <p>stay connected about <br/>the latest stock market</p>
                <p>Access exclusive community <br/>events, webinars, and meet-ups</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:ml-10">
            <img src={assets.community2} alt="Community Chat" className="w-full max-w-md" />
          </div>
        </section>
  )
}

export default BenefitSection
