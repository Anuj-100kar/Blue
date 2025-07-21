import React from 'react'
import BrokerCard from '../components/BrokerCard';
import { brokersdata } from '../Data/IpoData';
import Header from '../components/Header';


const AllBrokers = () => {
  return (
    <div className="px-4 ">
        <Header/>
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700 mt-4">Made toTrade</h1>
      {brokersdata.map((broker, index) => (
        <BrokerCard key={index} {...broker} />
      ))}
    </div>
  )
}

export default AllBrokers
