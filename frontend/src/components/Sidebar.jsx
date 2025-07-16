import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  const menuitems = [
    { label: "Dashboard", icon: assets.chart },
    { label: "Manage IPO", icon: assets.buy },
    { label: "IPO Subscription", icon: assets.document },
    { label: "IPO Allotment", icon: assets.chat },

  ]

  const otheritems = [
    { label: "Settings", icon: assets.setting },
    { label: "Api Manager", icon: assets.wallet },
    { label: "Accounts", icon: assets.profile },
    { label: "Help", icon: assets.infosquare },
  ]
  return (
    <div className='min-h-screen w-[240px] shadow-md p-4 bg-white'>
      <div className='flex itmes-center justify-center gap-2'>
        <img className='w-7 h-7' src={assets.bf} alt="" />
        <h2 className='  text-blue-700 text-lg font-bold mb-6'>
          Bluestock Fintech
        </h2>
      </div>


      <p className='text-gray-500 text-sm font-semibold mb-2'>MENU</p>
      <ul className='space-y-3 mb-6'>
        {
          menuitems.map((item, index) => (
            <li key={index} className='space-x-3 flex items-center px-5 py-2 rounded font-medium text-gray-600 cursor-pointer hover:text-blue-500 hover:bg-blue-200'>
              <img src={item.icon} alt="" className='w-5 h-5' />
              <span>{item.label}</span>
            </li>
          ))
        }
      </ul>

      <p className='text-gray-500 text-sm font-semibold mb-2'>OTHERS</p>
      <ul className='space-y-3 mb-6'>
        {
          otheritems.map((item, index) => (
            <li key={index} className='space-x-3 flex items-center px-5 py-2 rounded font-medium text-gray-600 cursor-pointer hover:text-blue-500 hover:bg-blue-200'>
              <img src={item.icon} alt="" className='w-5 h-5' />
              <span>{item.label}</span>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Sidebar
