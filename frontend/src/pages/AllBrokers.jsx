import React from 'react'
import BrokerCard from '../components/BrokerCard';
import { brokersdata } from '../Data/IpoData';


const AllBrokers = () => {
  return (
    <div className="px-4 ">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600 mt-4">Made to<span className='text-green-600'>Trade</span></h1>
      {brokersdata.map((broker, index) => (
        <BrokerCard key={index} {...broker} />
      ))}
    </div>
  )
}

export default AllBrokers
