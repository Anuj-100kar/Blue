import React from 'react'

const UserSidebar = () => {
  return (
     <div className="w-64 h-screen bg-[#111827] text-white p-4 space-y-6">
      <div className="text-xl font-bold">Bluestock</div>
      <nav className="space-y-4">
        <div className="hover:text-cyan-400 cursor-pointer">Dashboard</div>
        <div className="hover:text-cyan-400 cursor-pointer">Chart</div>
        <div className="hover:text-cyan-400 cursor-pointer">Options</div>
        <div className="hover:text-cyan-400 cursor-pointer">Analytics</div>
        <div className="hover:text-cyan-400 cursor-pointer">News</div>
        <div className="hover:text-cyan-400 cursor-pointer">Trade</div>
        <div className="hover:text-cyan-400 cursor-pointer">Profile</div>
      </nav>
    </div>
  )
}

export default UserSidebar
