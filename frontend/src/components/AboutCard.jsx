import React from 'react'

const AboutCard = ({name,value}) => {
  return (
    <div className='text-center m-3'>
      <div>
        <h3>{value}</h3>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default AboutCard
