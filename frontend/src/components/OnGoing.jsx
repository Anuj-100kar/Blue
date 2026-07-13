import React, { useState, useEffect } from 'react';
import IpoCard from './IpoCard';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { API_BASE_URL } from '../config'; // import the backend URL

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

const OnGoing = () => {
  const [loading, setLoading] = useState(true);
  const [ipoData, setIpoData] = useState([]);
  const location = useLocation();
  const isFullPage = location.pathname === '/ipo/ongoing-ipo';

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/ipo?status=ongoing`) // live backend URL
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
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>Ongoing</h3>
            <p className='hidden sm:block md:text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl'>
              Companies where the IPO investment process is started and will be listed soon in the stock market for regular trading.
            </p>
          </div>
          {!isFullPage && (
            <Link
              to='/ipo/ongoing-ipo'
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
            <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">No ongoing IPOs at the moment.</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Check back later for active opportunities.</p>
          </div>
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
        )}
      </div>
    </section>
  );
}

export default OnGoing;
