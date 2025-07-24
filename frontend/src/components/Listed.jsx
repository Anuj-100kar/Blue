import React, { useState ,useEffect} from 'react'
import LatestIpoCard from './LatestIpoCard'
import { useLocation,Link } from 'react-router-dom'
import axios from 'axios'

const Listed = () => {
  const location=useLocation();
  const isFullPage=location.pathname==='/bluestock/ipo/listed-ipo';

  const [loading,setLoading]=useState(true);
  const [ipoData,setIpoData]=useState([]);
   useEffect(() => {
        axios.get('http://localhost:5000/api/ipo/listed-ipos')
            .then((res) => {
                setIpoData(res.data);
                setLoading(false);
            }).catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, []);

  return (
    <section className='py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h3 className='text-gray-800 text-xl font-semibold '>New Listed</h3>
          <p className='text-gray-600 mt-1 text-sm max-w-2xl'>Companies that have been listed recently through an IPO. Find their listing gains and returns here.</p>
        </div>
         {!isFullPage && (
            <Link
              to='/bluestock/ipo/listed-ipo'
              className='text-blue-600 text-sm font-semibold hover:underline'
            >
              View All
            </Link>
          )}
      </div>
      {
        loading?
        <p>loading...</p>:
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                          {
                              ipoData.map((ipo)=>(
                                  <LatestIpoCard 
                                  key={ipo.id}
                                  id={ipo.id}
                                  logo={ipo.logo}
                                  name={ipo.company_name}
                                  ipoPrice={ipo.ipo_price}
                                  listingPrice={ipo.listing_price}
                                  listingGain={ipo.listing_gain}
                                  listingDate={ipo.listing_date}
                                  cmp={ipo.cmp}
                                  currentReturn={ipo.current_return}
                                  onDelete={() => setIpoData(prev => prev.filter(item => item.id !== ipo.id))}/>
                                  
                              ))
                          }
                     </div> 
      }
        
    </div>
    </section>
    
  )
}

export default Listed
