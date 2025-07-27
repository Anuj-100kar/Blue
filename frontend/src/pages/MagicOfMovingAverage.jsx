import React from 'react'
import ModuleContentCard from '../components/ModuleContentCard'
import { technicalmodules } from '../Data/IpoData'
import TechnicalSidebar from '../components/TechnicalSidebar'

const MagicOfMovingAverage = () => {
  return (
     <div>
       <h1 className='text-3xl font-bold text-gray-900 ml-6 mt-4'>Magic of Moving Average</h1>
      <div className='px-4 lg:20 py-10 flex flex-col lg:flex-row gap-2'>
        
        <div className='lg:w-1/3'>
            <TechnicalSidebar modules={technicalmodules}/>
        </div>
        <div className='lg:w-2/3 space-y-10'>
           
            {
                technicalmodules.map((module,index)=>(
                    <ModuleContentCard
                    key={index}
                    id={module.id}
                    title={module.title}
                    content={module.content}
                    />
                ))
            }
        </div>
      </div>
     
    </div>
  )
}

export default MagicOfMovingAverage
