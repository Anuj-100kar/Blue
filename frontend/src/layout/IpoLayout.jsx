import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const IpoLayout = () => {
  const location = useLocation();

  return (
    <div className="px-10 py-8 bg-gray-50 min-h-screen">

      {location.pathname === "/ipo" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">IPO Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <Link to="upcoming-ipo" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Upcoming IPOs</h3>
              <p className="text-sm text-gray-500 mt-2">View upcoming IPOs</p>
            </Link>

            <Link to="ongoing-ipo" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Ongoing IPOs</h3>
              <p className="text-sm text-gray-500 mt-2">Currently open IPOs</p>
            </Link>

            <Link to="listed-ipo" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Listed IPOs</h3>
              <p className="text-sm text-gray-500 mt-2">Already listed IPOs</p>
            </Link>

            <Link to="closed-ipo" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Closed IPOs</h3>
              <p className="text-sm text-gray-500 mt-2">Past IPO data</p>
            </Link>

          </div>
        </div>
      )}

      <div className="mt-8">
        <Outlet />
      </div>

    </div>
  )
}

export default IpoLayout