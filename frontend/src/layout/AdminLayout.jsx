import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1'>
        <DashboardHeader/>
        <main className='p-4'>
            <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
