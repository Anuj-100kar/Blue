import React from 'react'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import box from '../assets/No Internet.json'


const Error = () => {
    const navigate=useNavigate();
  return (
    <div className='min-h-screen flex flex-col items-center justify-between bg-white px-4 py-6'>
      <header className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 py-4">
        <div className="text-xl sm:text-2xl font-bold flex items-center gap-2">
          <img src="/logo.png" alt="Bluestock" className="h-6" />
          <span>BLUESTOCK</span>
        </div>
        <nav className="flex justify-center sm:justify-end flex-wrap space-x-6 text-gray-700 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/support" className="hover:text-blue-600">Support</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/** main content.... */}
      <main className='flex flex-col items-center text-center p-2'>
            <h2 className='text-2xl sm:text-3xl font-bold text-blue-600 mb-2'>OOPS...</h2>

            <div className='w-64 h-64 sm:w-72 sm:h-72 mb-6 '>
                {/* <Lottie animationData={} loop={true}/> */}
                <Lottie animationData={box} loop={true}/>
            </div>
            <div className='text-center'>
                <h3 className='text-lg sm:text-xl font-semibold mb-1'>Something went wrong.</h3>
                <p className='text-sm text-gray-500 mb-2'>Sorry,we can't find page your'e looking for.</p>
            </div>
            <button onClick={()=>navigate(-1)}
                className='px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
                >
                Go Back
            </button>
      </main>
    </div>
  )
}

export default Error
