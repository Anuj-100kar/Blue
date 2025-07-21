import React from 'react'
import { FaEye } from 'react-icons/fa'

const TechnicalCard = ({
    icon, title, description, views, link,
}) => {
    return (
        <div className='bg-white rounded-xl border shadow-sm p-6 w-full max-w-sm flex flex-col items-start space-y-4'>

            <img src={icon} alt="" className='mx-16 h-32 w-32 object-contain mt-4' />
            <div className='text-center space-y-2'>
                <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>
            <div className='flex justify-between items-center w-full pt-3 text-sm text-gray-600 border-t'>
                <div className='flex items-center gap-2'>
                    <FaEye className='mt-1 text-orange-500' />
                    <span>{views.toLocaleString()} views</span>
                </div>

                <a href={link} className=' text-blue-500 text-sm font-medium '>
                    View Details &gt;&gt;
                </a>
            </div>
        </div>
    )
}

export default TechnicalCard
