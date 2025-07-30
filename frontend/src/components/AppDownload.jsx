import React from 'react'
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
      <section className="px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold">On The Go</h2>
            <p className="text-gray-600 text-sm">
              We believe that everyone should be able to wield technology while
              learning trading. Use Bluestock on the go, on your mobile device.
              Experience the ultimate mobile trading experience on Android or iOS.
            </p>
            <div className="flex md:flex-row justify-center md:justify-start gap-4">
              <img
                src={assets.verify} alt=''
                className="w-28 h-28 object-contain"
              />
               <div className='flex flex-col justify-center'>
                <p className="text-blue-800 font-semibold">Scan and download</p>
                <p className='text-gray-500 text-xs'>Use your android device <br/>to download the app</p>
               </div>
            </div>
           
          </div>

          {/* Right: App Screenshot */}
          <div className="hidden md:flex-1 flex justify-center">
            <img
              src={assets.mobo} 
              alt="App Screenshot"
              className="w-36 h-[700px] md:w-96 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* App 2.0 Info */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Bluestock App 2.0 is Live Now!
          </h3>
          <p className="mb-4 text-gray-600">Download our app:</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow hover:shadow-md">
              <FaGooglePlay className="text-green-600" />
              <span>Google Play</span>
            </a>
            <a href="#" className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow hover:shadow-md">
              <FaAppStoreIos className="text-black" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
