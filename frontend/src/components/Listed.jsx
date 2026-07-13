import React, { useState, useEffect } from 'react';
import LatestIpoCard from './LatestIpoCard';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config'; 

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow p-4 animate-pulse">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
    <div className="space-y-3">
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
    </div>
  </div>
);

const Listed = () => {
  const location = useLocation();
  const isFullPage = location.pathname === '/ipo/listed-ipo';

  const [loading, setLoading] = useState(true);
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/ipo?status=listed`) 
      .then((res) => {
        setIpoData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className='py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h3 className='text-gray-800 dark:text-white text-xl font-semibold'>New Listed</h3>
            <p className='hidden sm:block md:text-gray-600 dark:text-gray-400 mt-1 text-sm max-w-2xl'>
              Companies that have been listed recently through an IPO. Find their listing gains and returns here.
            </p>
          </div>
          {!isFullPage && (
            <Link
              to='/ipo/listed-ipo'
              className='text-blue-600 dark:text-cyan-400 text-sm font-semibold hover:underline'
            >
              View All
            </Link>
          )}
        </div>
        {loading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard key={n} />)}
          </div>
        ) : ipoData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 rounded border border-dashed border-gray-300 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">No recently listed IPOs.</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Historical listings will appear here.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ipoData.map((ipo) => (
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
                onDelete={() => setIpoData(prev => prev.filter(item => item.id !== ipo.id))}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Listed;
