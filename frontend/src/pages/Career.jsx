import React from 'react'
import Hero2 from '../components/Hero2'

const Career = () => {
    return (
        <div className='w-full max-w-7xl mx-auto px-4 py-10'>
            <p className="text-sm text-gray-500 mb-2 hover:text-blue-500">Home &gt; Careers</p>
            <section className='mb-10'>

                <h2 className='text-3xl font-bold text-gray-700 mb-4 leading-tight'>Together, Let’s Build The <br />Future Of Fintech !</h2>
                <p className='text-gray-600 mb-6'>Join Bluestock Fintech to create disruptive
                    <br />fin-tech products, while<br />working from anywhere!</p>
                <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>See Job Openings</button>
            </section>
            <Hero2 />
            <p className='text-gray-600 text-sm mt-12 text-center'>
                All official communication with the HR team at Bluestock Fintech will be through <strong>hr@bluestock.in</strong>
            </p>


        </div>
    )
}

export default Career
