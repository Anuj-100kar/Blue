import React from 'react'

const Question = () => {
  return (
    <div className='ml-4 border-none '>
      <p className='text-xl font-bold text-gray-900'>Frequently Asked Questions?</p>
      <p className='text-sm text-gray-700'>Find answers to common questions that come in your mind related to IPO.</p>
      <div className='flex flex-col font-semibold space-y-3 ml-2'>
        <div className='ml-2 text-sm mt-5'>
            <p>How to Subscribe to an IPO?</p>
            <ul className='text-xs mt-3'>
                <li >Step 1: Login to your respective service provider.</li>
                <li>Step 2: Click on the IPO button.</li>
                <li>Step 3: Select the IPO you want to bid and enter the relevant details.</li>
                <li>Step4: Your subscription will be completed once you make the payment or give permission.</li>
            </ul>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>Should I buy an IPO first day?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>How do you know if an IPO is good?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>How to check IPO start date?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>What is issue size?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>How many shares in a lot?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>How is the lot size calculated?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>Who decides the IPO price band?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>What is IPO GMP?</p>
        </div>
        <div className='mt-3 ml-2 text-sm px-3 py-2 border-none shadow-sm'>
            <p>How many lots should I apply for IPO?</p>
        </div>
      </div>
    </div>
  )
}

export default Question
