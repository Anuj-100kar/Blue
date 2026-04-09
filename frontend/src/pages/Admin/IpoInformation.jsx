import React from 'react'
import { assets } from '../../assets/assets'
import DashboardHeader from '../../components/DashboardHeader'
import RegisterSidebar from '../../components/RegisterSidebar'
import Sidebar from '../../components/Sidebar'
import RegisterForm from '../../components/RegisterForm'
import { Link } from 'react-router-dom'

const IpoInformation = () => {
  return (
   <>
   
    <div className="flex h-screen bg-gray-100">
     
      <div className="flex flex-col flex-1 ">
        <h1 className='text-gray-900 font-bold p-3 text-lg'>Upcoming IPO Information</h1>
        <p className='font-semibold text-gray-800 text-sm  p-3'>Manage your IPO Details</p>
        <div className='flex flex-1 p-4 space-x-4'>
          <RegisterSidebar />
          <div className="flex gap-6">

            <Link to="/admin/add-ipo">
              <div className="bg-white p-6 rounded shadow hover:shadow-lg cursor-pointer w-60">
                <h3 className="font-semibold text-gray-800">
                  Upcoming / Ongoing IPO
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Add new IPO before listing
                </p>
              </div>
            </Link>

            <Link to="/admin/add-listed">
              <div className="bg-white p-6 rounded shadow hover:shadow-lg cursor-pointer w-60">
                <h3 className="font-semibold text-gray-800">
                  Listed IPO
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Add IPO after listing
                </p>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default IpoInformation
