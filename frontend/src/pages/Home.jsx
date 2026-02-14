import React from 'react'
import Hero from '../components/Hero'
import OnGoing from '../components/OnGoing'
import Listed from '../components/Listed'
import UpComing from '../components/UpComing'
import Header from '../components/Header'
import NewsSection from '../components/NewsSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { useEffect,useRef } from 'react'


const Home = () => {
  const iporef=useRef(null);
  
  useEffect(()=>{
    if(iporef.current){
      iporef.current.scrollIntoView({behavior:'smooth'});
    }
  })

  return (
    <div>
      <div ref={iporef} className='mt-3 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <h3 className='font-bold text-gray-900 '>IPO</h3>
        <p className='text-sm text-gray-600 mt-1'>Following is the list of companies for IPO as of today.
        </p>
        </div>
        
      </div>
      <UpComing />
      <Hero />
      {/* <OnGoing />
      <Listed /> */}
      <NewsSection/>
      <FAQ/>
      </div>
    
  )
}

export default Home
