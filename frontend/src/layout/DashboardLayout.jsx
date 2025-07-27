import React from 'react'
import UserSidebar from '../components/UserSidebar'
import UserHeader from '../components/UserHeader'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="p-4 bg-[#0F172A] min-h-screen text-white">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
