import React, { useState, useEffect } from 'react';
import IpoCard from './IpoCard';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config'; // import the backend URL

const UpComing = () => {
  const [ipoData, setIpoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isFullPage = location.pathname === '/bluestock/ipo/upcoming-ipo';

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/ipo`) // use live backend URL
      .then((res) => {
        console.log("API Data:", res.data);
        const upcomingIpos = res.data.filter(ipo => ipo.status === 'upcoming');
        setIpoData(upcomingIpos);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      })
  }, []);

  return (
    <section className='py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Upcoming IPO's</h3>
            <p className='text-xs text-gray-600 mt-1 max-w-2xl'>
              Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later on.
            </p>
          </div>
          {!isFullPage && (
            <Link
              to='/bluestock/ipo/upcoming-ipo'
              className=' text-blue-600 text-sm font-semibold hover:underline'
            >
              View All
            </Link>
          )}
        </div>
        {
          loading ? (
            <p>loading...</p>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {ipoData.map((ipo) => (
                <IpoCard
                  key={ipo.id}
                  id={ipo.id}
                  logo={ipo.logo}
                  name={ipo.company_name}
                  priceBand={ipo.price_band ? ipo.price_band : "Not issued"}
                  openDate={ipo.open_date ? ipo.open_date : "Not issued"}
                  closeDate={ipo.close_date ? ipo.close_date : "Not issued"}
                  issueSize={ipo.issue_size ? ipo.issue_size : "Not issued"}
                  issueType={ipo.issue_type}
                  listingDate={ipo.listing_date ? ipo.listing_date : "Not issued"}
                  onDelete={() => setIpoData(prev => prev.filter(item => item.id !== ipo.id))}
                />
              ))}
            </div>
          )
        }
      </div>
    </section>
  );
}

export default UpComing;
