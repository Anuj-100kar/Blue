import React from 'react'
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

const AppDownload = () => {
  return (
      <section className="px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: QR + Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold">On The Go</h2>
            <p className="text-gray-600">
              We believe that everyone should be able to wield technology while
              learning trading. Use Bluestock on the go, on your mobile device.
              Experience the ultimate mobile trading experience on Android or iOS.
            </p>
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/qrcode.png" // Replace with your actual QR image
                alt="QR Code"
                className="w-28 h-28"
              />
            </div>
            <p className="text-blue-600 font-semibold">Scan and download</p>
          </div>

          {/* Right: App Screenshot */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/app-preview.png" // Replace with actual image path
              alt="App Screenshot"
              className="w-72 md:w-96 rounded-lg shadow-lg"
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
