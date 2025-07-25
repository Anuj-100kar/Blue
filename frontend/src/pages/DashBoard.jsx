import React, { useEffect, useState } from 'react'
import { FiEye, FiTrash2 } from 'react-icons/fi'
import axios from 'axios';

const DashBoard = () => {
    const [ipos,setIpos]=useState([]);

    useEffect(()=>{
        const fetchIpoData=async()=>{
            try {
                const res=await axios.get('http://localhost:5000/api/ipo');
                setIpos(res.data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchIpoData();
    },[]);
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
                    ipos.map((ipo)=>(
                        <tr key={ipo.id} className='border-t hover:bg-gray-50'>
                            <td className='px-4 py-3 text-sm font-semibold text-gray-800'>{ipo.company_name}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.price_band}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.open_date}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.close_date}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.issue_size}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.issue_type}</td>
                            <td className='px-4 py-3 text-sm text-center'>{ipo.listing_date}</td>
                            <td className='px-4 py-3 text-sm text-center'>
                                <span className='bg-orange-100 text-orange-600 text-xs rounded-full px-3 py-1 '>
                                    {ipo.status || 'ongoing'}
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
