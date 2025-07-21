import React from 'react'
import UpComing from '../components/UpComing'
import Question from '../components/Question'

const UpcomingIpos = () => {
  return (
    <div className='mt-4 px-6 '>
      <p className="text-sm text-gray-500 mb-2 cursor-pointer ml-4">
          <span className="hover:text-blue-500">Bluestock</span> &gt;{' '}
          <span className="hover:text-blue-500">IPO</span> &gt;
          <span className="hover:text-blue-500">UPCOMING IPO</span>
        </p>
      <div className='max-w-8xl space-y-2'>
        <UpComing />
      <Question/>
      </div>
    </div>
  )
}

export default UpcomingIpos
