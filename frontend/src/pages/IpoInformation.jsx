import React from 'react'
import { assets } from '../assets/assets'
import DashboardHeader from '../components/DashboardHeader'
import RegisterSidebar from '../components/RegisterSidebar'
import Sidebar from '../components/Sidebar'
import RegisterForm from '../components/RegisterForm'

const IpoInformation = () => {
  return (
   <>
   
    <div className="flex h-screen bg-gray-100">
     
      <div className="flex flex-col flex-1 ">
        <h1 className='text-gray-900 font-bold p-3 text-lg'>Upcoming IPO Information</h1>
        <p className='font-semibold text-gray-800 text-sm  p-3'>Manage your IPO Details</p>
        <div className='flex flex-1 p-4 space-x-4'>
          <RegisterSidebar />
          <RegisterForm/>
        </div>
      </div>
    </div>
    </>
  )
}

export default IpoInformation
