import React from 'react'
import TradingChart from '../components/TradingChart'

const UserDashboard = () => {
  return (
    <div className='p-4'>
        <h2 className='text-lg text-white font-semibold mb-4'>Trading Chart</h2>
        <TradingChart/>
    </div>
  )
}

export default UserDashboard
