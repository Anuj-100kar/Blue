import React from 'react'
import AboutNews from '../components/AboutNews'
import JoinUsSection from '../components/JoinUsSection'
import FAQ from '../components/FAQ'

const AboutUs = () => {
    return (
        <>
            <div className="px-8 mt-4 ml-4">
                <p className="text-sm text-gray-500 mb-2 cursor-pointer">
                    <span className="hover:text-blue-500">Home</span> &gt;{' '}
                    <span className="hover:text-blue-500">About Us</span>
                </p>
            </div>
            <AboutNews />
            <JoinUsSection />
            <FAQ />


        </>
    )
}

export default AboutUs
