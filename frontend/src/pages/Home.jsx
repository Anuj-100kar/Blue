import React from 'react'
import Hero from '../components/Hero'
import OnGoing from '../components/OnGoing'
import Listed from '../components/Listed'
import UpComing from '../components/UpComing'
import Header from '../components/Header'
import NewsSection from '../components/NewsSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='mt-3 px-6 ml-40'>
        <h3 className='text-2xl font-bold text-gray-900'>IPO</h3>
        <p className='text-sm text-gray-600 mt-1 max-w-2xl'>Following is the list of companies for IPO as of today.
        </p>
      </div>
      <UpComing />
      <Hero />
      <OnGoing />
      <Listed />
      <NewsSection/>
      <FAQ/>
      <Footer/>
      </div>
    
  )
}

export default Home
