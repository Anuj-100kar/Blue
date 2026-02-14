import React from 'react'
import { Outlet } from 'react-router-dom'
import UpcomingIpos from '../pages/UpcomingIpos'

const IpoLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default IpoLayout
