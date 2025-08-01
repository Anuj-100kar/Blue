import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full text-gray-800 text-sm px-6 lg:px-20 py-10'>
      <div className='flex flex-wrap justify-between items-center gap-y-10 gap-x-10'>
        {
          [
            {
              title:'Resources',
              items:['Trading View','NSE Holidays','e-Voting CDSL','e-Voting NSDL','Market Timings'],
              links:['/market-overview','#','#','#','#'],
            },
            {
              title:'Company',
              items:['Careers','Contact Us','About US','Community','Blogs'],
              links:['/bluestock/career','/bluestock/contact-us','/bluestock/about-us','/bluestock/community','/bluestock/blogs'],
            },
            {
              title:'Offerings',
              items:['Compare Broker','Fin Calculators','IPO','All Brokers','Products'],
              links:['/bluestock/compare-brokers','#','/bluestock/ipo','/bluestock/brokers','/bluestock/products'],
            },
            {
              title:'Links',
              items:['Shark Investor','Mutual Funds','Sitemap','Indian Indices','Bug Bounty Program'],
              links:['/bluestock/shark-investor','/bluestock/mutual-fund','#','#','#'],
            },
            {
              title:'Policy',
              items:['Terms & Conditions','Privacy Policy','Refund Policy','Disclaimer','Trust & Security'],
              links:['#','#','#','#','#'],
            }
          ].map((section,index)=>(
            <ul key={index} className='min-w-[160px]'>
              <li className='font-semibold mb-3'>{section.title}</li>
              {section.items.map((item,idx)=>(
                <li key={idx} className='mb-2 text-gray-600 cursor-pointer'>
                 <Link to={section.links[idx]}>{item}</Link> 
                </li>
              ))}

            </ul>
          ))
        }
      </div>
      <div className='flex flex-col lg:flex-row justify-between mt-10 gap-10 pt-8'>
        {/*left */}
        <div className='flex flex-col space-y-4 w-full lg:w-1/3 pb-10 lg:pb-0'>
          <div className='flex gap-3'>
            <img className='w-5 h-5 cursor-pointer' src={assets.xe} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.facebook} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.youtube} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.linkdin} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.instagram} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.telegram} alt="" />
          </div>
          <div className='flex items-center gap-2'>
            <img src={assets.logo} alt="" className='h-5 w-8' />
            <h2 className='text-base font-bold'>BLUESTOCK</h2>
          </div>
          <div className='text-gray-700 text-sm'>
            <p>Bluestock Fintech </p>
            <p>Pune, Maharashtra</p>
            <p>MSME Registration No: </p>
            <p>UDYAM-MH-01-v0138001 </p>
          </div>
          <img src={assets.startup} alt="" className='h-6 w-36 mt-2' />
        </div>
        {/*right */}
  
        <div className='flex-[2] leading-relaxed space-y-4 text-sm'>
            <p>Investment in securities markets are subject to market risks, read all the related documents carefully before investing as 
              <br/>prescribed by SEBI. Issued in the interest of the investors.</p>
            <p>The users can write to <span className='text-blue-600'>hello@bluestock.in</span> for any app, website related queries. Also you can send IT / Tech related feedback to
            <br/><span className='text-blue-600'>cto@bluestock.in</span> </p>
            <p><strong>Disclaimer:</strong> We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/ 
            <br/>sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles
            <br/> are for educational purposes only.</p>
            <p>Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock 
              <br/>markets are subject to market risks.</p>
        </div>
      </div>
      <div className='flex mt-8 pt-4 border-t md:flex-row text-xs justify-between items-center text-gray-500'>
        <p>Bluestock Fintech All Rights Reserved.</p>
        <p>Made with ❤️ in Pune, Maharashtra</p>
      </div>
    </div>
  )
}

export default Footer
