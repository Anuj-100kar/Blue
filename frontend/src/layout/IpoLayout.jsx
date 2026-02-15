import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import UpcomingIpos from '../pages/UpcomingIpos'

const IpoLayout = () => {
  const location=useLocation();
  return (
    <div style={{padding:"40px"}}>
      {
        location.pathname==="/ipo" && (
          <div>
            <h2>IPO Categories</h2>
            <ul style={{lineHeight:"2.5"}}>
              <li><Link to="upcoming-ipo">Upcoming Ipos</Link></li>
              <li><Link to="ongoing-ipo">Ongoing Ipos</Link></li>
              <li><Link to="listed-ipo">Listed Ipos</Link></li>
            </ul>
          </div>
        )
      }
      <Outlet/>
    </div>
  )
}

export default IpoLayout
