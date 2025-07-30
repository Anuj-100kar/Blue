import React from 'react'
import TradingChart from '../components/TradingChart'

const UserDashboard = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
        <h2 className='sm:text-lg md:text-xl lg:text-2xl text-white font-semibold mb-4'>Trading Chart</h2>
        <TradingChart/>
    </div>
  )
}

export default UserDashboard
