import React from 'react'

const LatestIpoCard = ({
    logo,
    name,
    ipoPrice,
    listingPrice,
    listingGain,
    listingDate,
    cmp,
    currentReturn,

}) => {
    return (
        <div className='bg-white rounded-xl shadow p-6 flex flex-col gap-4 max-w-[542px] max-h-[450px]' >
            <div className='flex items-center gap-2 mb-3'>
                <img src={logo} alt="" className='w-8 h-8 rounded-full object-cover' />
                <h3 className='text-blue-500 font-semibold text-base leading-tight'>{name}</h3>
            </div>
            <div className=' text-sm text-gray-700 flex flex-col mb-4 gap-2'>

                <div className='grid grid-cols-3 gap-x-4 gap-y-2'>
                    <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-gray-500'>IPO PRICE</span>
                        <span className='text-gray-700'>{ipoPrice}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>LISTING PRICE</span>
                        <span className='text-gray-700'>{listingPrice}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>LISTING GAIN</span>
                        <span className='text-gray-700'>{listingGain}</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-6'>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>LISTING DATE</span>
                        <span className='text-gray-700'>{listingDate}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>CMP</span>
                        <span className='text-gray-700'>{cmp}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>CURRENT RETURN</span>
                        <span className='text-gray-700'>{currentReturn}</span>
                    </div>
                </div>

            </div>
            <div className='flex gap-3 justify-start'>
                <button className='text-gray-800 px-4 py-2 bg-blue-200 text-xs rounded-md'>RHP</button>
                <button className='text-gray-800 px-4 py-2 bg-blue-200 text-xs rounded-md'>DRHP</button>
            </div>
        </div>
    )
}


export default LatestIpoCard
