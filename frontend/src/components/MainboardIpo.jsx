import React from 'react'

const MainboardIpo = () => {
    return (
        <div className='max-w-[362px] bg-white rounded p-8 shadow-sm'>
            <div className='flex justify-between items-center mb-4 '>
                <div >
                    <h3 className='text-md font-bold text-gray-600'>Main Board IPO</h3>
                    <p className='text-gray-400 text-xs'>From 01 Jan 2024</p>
                </div>
                <a href="#" className='text-sm text-gray-400 font-medium hover:text-blue-400'>
                    view report
                </a>
            </div>
            {/*chart  */}
            <div className='relative h-[125px] w-[125px] mx-auto mb-4 '>
                <div className='absolute top-0 left-0 w-full h-full rounded-full border-[10px] border-blue-400 border-t-blue-900 border-r-blue-600'>
                </div>
                <div className='absolute top-[25%] left-[15%] w-[130px] h-[100px] rounded flex flex-col justify-center items-center text-center '>
                    <p className='text-xs font-semibold text-gray-600'>Afternoon</p>
                    <span className='text-lg font-bold text-blue-700'>15</span>
                    <p className='text-[10px] text-gray-500'>IPO NSE & BSE</p>
                </div>
            </div>

            <div className='flex justify-between text-sm text-gray-600'>
                <div className='flex items-center gap-1'>
                    <div className='w-3 h-3 bg-blue rounded-full '></div>
                    Upcoming <span className='ml-1 font-semibold'>15</span>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-3 h-3 bg-blue rounded-full '></div>
                    New Listed <span className='ml-1 font-semibold'>25</span>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-3 h-3 bg-blue rounded-full '></div>
                    Ongoing <span className='ml-1 font-semibold'>2</span>
                </div>

            </div>
        </div>
    )
}

export default MainboardIpo
