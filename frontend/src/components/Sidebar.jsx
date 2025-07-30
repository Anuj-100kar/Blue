import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const menuitems = [
    { label: "Dashboard", icon: assets.chart,path:'/admin/dashboard' },
    { label: "Manage IPO", icon: assets.buy ,path:'/admin/register'},
    { label: "IPO Subscription", icon: assets.document ,path:'/ipo-subscription'},
    { label: "IPO Allotment", icon: assets.chat,path:'/ipo-allotment' },

  ]

  const otheritems = [
    { label: "Settings", icon: assets.setting ,path:'/settings'},
    { label: "Api Manager", icon: assets.wallet,path:'/api-manager' },
    { label: "Accounts", icon: assets.profile,path:'/accounts' },
    { label: "Help", icon: assets.infosquare,path:'/help' },
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
            <Link to={item.path} key={index}>
            <li  className='space-x-3 flex items-center px-5 py-2 rounded font-medium text-gray-600 cursor-pointer hover:text-blue-500 hover:bg-blue-200'>
              <img src={item.icon} alt="" className='w-5 h-5' />
              <span className='hidden sm:block'>{item.label}</span>
            </li>
            </Link>
          ))
        }
      </ul>

      <p className='text-gray-500 text-sm font-semibold mb-2'>OTHERS</p>
      <ul className='space-y-3 mb-6'>
        {
          otheritems.map((item, index) => (
            <Link to={item.path} key={index}>
            <li  className='space-x-3 flex items-center px-5 py-2 rounded font-medium text-gray-600 cursor-pointer hover:text-blue-500 hover:bg-blue-200'>
              <img src={item.icon} alt="" className='w-5 h-5' />
              <span className='hidden sm:block'>{item.label}</span>
            </li>
            </Link>
          ))
        }
      </ul>

    </div>
  )
}

export default Sidebar
