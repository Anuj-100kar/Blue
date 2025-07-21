import React from 'react'
import { stocks } from '../assets/assets'
import { FiEye, FiTrash2 } from 'react-icons/fi'

const DashBoard = () => {
  return (
    <div className='p-4 min-h-screen bg-gray-100'>
        <div className='flex justify-between items-center mb-2'>
            <h2 className='font-semibold text-gray-700 text-xl '>Upcomming IPO | Dashboard</h2>
            <button className='bg-blue-600 text-white px-5 py-2 rounded font-medium hover:bg-blue-700'>
                Register IPO
            </button>
        </div>

        <div className='overflow-x-auto bg-white rounded shadow-sm'>
            <table className='min-w-full table-auto'>
            <thead className='bg-gray-100 text-gray-600 text-sm'>
                <tr>
                    <th className='p-3 text-left'>Company</th>
                    <th className='p-3'>Price Band</th>
                    <th className='p-3'>Open</th>
                    <th className='p-3'>Close</th>
                    <th className='p-3'>ISSUE SIZE</th>
                    <th className='p-3'>ISSUE Type</th>
                    <th className='p-3'>Listing Date</th>
                    <th className='p-3'>Status</th>
                    <th className='p-3'>Action</th>
                    <th className='p-3'>Delete/View</th>
                </tr>
            </thead>
            <tbody>
                {
                    stocks.map((ipo,index)=>(
                        <tr key={ipo._id} className='border-t hover:bg-gray-50'>
                            <td className='px-4 py-3 text-sm font-semibold text-gray-800'>{ipo.name}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.priceBand}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.openDate}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.closeDate}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.issueSize}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.issueType}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.listingDate}</td>
                            <td className='px-4 py-3 text-sm text-center'>
                                <span className='bg-orange-100 text-orange-600 text-xs rounded-full px-3 py-1 '>
                                    ongoing
                                </span>
                            </td>
                            <td className='px-4 py-3 text-sm text-center'>
                                
                                    <button className='text-sm text-white bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded '>
                                        update
                                    </button>
                                
                            </td>
                            <td className='px-4 py-3 text-sm text-center'>
                                <div className='flex justify-center gap-3'>
                                    <button className='text-green-600 hover:text-green-800'>
                                        <FiTrash2 size={18}/>
                                    </button>
                                    <button className='text-red-500 hover:text-red-700'>
                                        <FiEye size={18}/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
      
    </div>
  )
}

export default DashBoard;
