import React from 'react'

const TechnicalSidebar = ({modules}) => {
  return (
    <div className='bg-white border rounded-xl p-4 space-y-4 shadow-md w-full max-w-sm'>
      <h2 className='text-lg font-semibold text-gray-800'>Module Units</h2>
      <ul className='space-y-2 text-sm'>
        {
            modules.map((item,idx)=>(
                <li key={idx} >
                    <a href={`#${item.id}`} className='hover:text-blue-600 text-gray-700'>
                        {idx+1}.{item.title}
                    </a>
                </li>
            ))
        }
      </ul>
      <div className='flex gap-4 mt-4'>
        <button className='text-white px-4 py-2 rounded bg-red-700'>GAME</button>
        <button className='text-white px-4 py-2 rounded bg-blue-700'>QUIZ</button>
      </div>
      <p className='text-xs text-center text-gray-500 mt-2'>view leaderboard</p>
    </div>
  )
}

export default TechnicalSidebar
