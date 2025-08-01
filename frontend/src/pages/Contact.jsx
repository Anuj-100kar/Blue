import React from 'react'
import Header from '../components/Header'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <>
        <div className="px-8 mt-4 ml-2">
        <p className="text-sm text-gray-500 mb-2 cursor-pointer">
          <span className="hover:text-blue-500">Home</span> &gt;{' '}
          <span className="hover:text-blue-500">Contact Us</span>
        </p>
         <h1 className="text-3xl font-semibold text-gray-800 mt-4">How Can We Help You ?</h1>
      </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
        

            <div className="flex flex-wrap gap-8 sm:flex-col lg:flex-row  mb-16">
                {/* Email Box */}
                <div className="flex-1 min-w-[280px] bg-white border border-gray-400 rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-2">Email us</h2>
                    <p className="text-sm text-gray-600 mb-4">One of our agents will respond at the earliest</p>
                    <a
                        href="mailto:hello@bluestock.in"
                        className="inline-flex items-center text-blue-600 font-medium"
                    >
                        hello@bluestock.in
                        <span className="ml-2">→</span>
                    </a>
                </div>

                {/* Chat Box */}
                <div className="flex-1 min-w-[280px] bg-white border border-gray-400 rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-2">Chat us</h2>
                    <p className="text-sm text-gray-600 mb-4">Available from 8:00AM to 5:00PM</p>
                    <a
                        href="#"
                        className="inline-flex items-center text-blue-600 font-medium"
                    >
                        Open Chat
                        <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
           
        </div>
         <div className="bg-blue-700 text-white max-w-7xl mx-auto rounded-xl py-12 px-6 text-center relative">
                <h2 className="text-3xl font-bold mb-3">Interact With Us in Our Active Community</h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    Ask questions or discuss anything related to investing or trading<br/>
                    in the most active trading & investing community
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:opacity-90">
                    JOIN NOW
                </button>

                {/*qr codes... */}
                <div className="absolute bottom-[-60px] left-6 rounded-lg shadow-lg flex items-center space-x-4">
                    <img
                        src={assets.Q}
                        alt="QR Code"
                        className="w-40 "
                    />
                </div>
            </div>
        </>
    )
}

export default Contact
