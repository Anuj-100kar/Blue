import React from 'react'

const Hero = () => {
    return (
        <section className='  py-10  px-4 '>
           <div className='max-w-3xl mx-auto p-6 rounded-xl shadow-md flex flex-col items-center text-center bg-gradient-to-r from-blue-300 to-purple-300'>
             <div className='flex flex-row items-center gap-2 mb-3'>
                <img src="/images/logo.jpg" alt="" className='w-14' />
                <h2 className=' font-bold text-lg text-gray-800'>BLUESTOCK</h2>
            </div>
            <h1 className='font-semibold text-xl md:text-2xl mb-4 text-gray-800'>Applying for this IPO?</h1>
            <p className='text-sm text-gray-600 mb-6 leading-relaxed'>The way you compare & invest in only the best IPO, let us help you get started by comparing and <br />
                selecting the best Demat account. Open your Demat account now to apply for your favourite IPO.</p>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm'>Open a Demat Account</button>
           </div>
        </section>
    )
}

export default Hero
