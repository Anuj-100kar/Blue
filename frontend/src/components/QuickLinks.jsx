import React from 'react'
import { assets } from '../assets/assets'

const QuickLinks = () => {
    const quicklinks=[
        {icon:assets.nse,label:"NSE India",link:"#"},
        {icon:assets.bse,label:"BSE India",link:"#"},
        {icon:assets.sebi,label:"SEBI",link:"#"},
        {icon:assets.moneycontrol,label:"Money Control",link:"#"},
    ]
  return (
    <div className='max-w-[312px] bg-white rounded p-8'>
        <h3 className='text-md font-bold text-gray-500 mb-4'>Quick Links</h3>
        <p className='text-gray-400 text-xs mb-5'>Adipiscing elit, sed do eiusmod tempor</p>

        <ul className='space-y-4'>
            {
                quicklinks.map((item,index)=>(
                    <li key={index} className='flex justify-between items-center'>
                        <div className='flex items-center space-x-3'>
                            <img src={item.icon} alt="" className='w-6 h-6 rounded-full'/>
                            <span className='text-sm font-medium text-gray-700'>{item.label}</span>
                        </div>
                        <a href={item.link} className='text-sm text-blue-400 font-semibold'>
                            visit now
                        </a>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default QuickLinks
