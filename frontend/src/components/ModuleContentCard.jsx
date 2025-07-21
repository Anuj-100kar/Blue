import React from 'react'
import FeedbackFooter from './FeedbackFooter'

const ModuleContentCard = ({id,title,content}) => {
  return (
    
    <div id={id} className='border rounded-xl p-6 shadow-sm space-y-4 bg-white'>
      <h3 className='text-xl font-bold text-blue-700 border-b pb-2'>{title}</h3>
      <div className='h-40 bg-gray-200 rounded-md object-contain'>
            
      </div>
      <p className='text-sm text-gray-700 leading-relaxed'>{content}</p>
      <FeedbackFooter/>
    </div>
  )
}

export default ModuleContentCard
