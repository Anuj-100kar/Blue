import React from 'react'

const IpoDashboard = () => {
    const gain=20;
    const loss=9;
    const total=30;
  return (
    <div className='relative flex flex-col items-center justify-center bg-white p-8 rounded w-full max-w-[313px]'>
        <h3 className='text-md font-bold text-gray-500 mb-3'>IPO Dashboard India</h3>

        <div className='relative w-full h-[321px] '>
            <div className='absolute top-0 left-0 w-[100px] h-[100px] bg-blue-500 text-white rounded-full flex flex-col items-center justify-center'>
                <span className='text-xl font-bold'>{gain}</span>
                <span className='text-xs text-center px-1'>IPO in gain</span>
            </div>
            <div className='absolute top-0 right-0 w-[126px] h-[130px] bg-green-500 text-white rounded-full flex flex-col items-center justify-center'>
                <span className='text-xl font-bold'>{loss}</span>
                <span className='text-xs text-center px-1'>IPO in loss</span>
            </div>
            <div className='absolute top-[60px] left-1/2 -translate-x-1/2 w-[174px] h-[179px] bg-yellow-500 text-white rounded-full flex flex-col items-center justify-center z-10'>
                <span className='text-xl font-bold'>{total}</span>
                <span className='text-xs text-center px-1'>Total IPO</span>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default IpoDashboard
