import React from 'react'
import Header from '../components/Header'
import Hero4 from '../components/Hero4'
import Highlights from '../components/Highlights'
import WhyLove from '../components/WhyLove'
import AppDownload from '../components/AppDownload'
import BrokersTable from '../components/BrokersTable'

const HomeScreen = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main className='space-y-20'>
        <Hero4/>
        <Highlights/>
        <WhyLove/>
        <AppDownload/>
        <BrokersTable/>
      </main>
    </div>
  )
}

export default HomeScreen
