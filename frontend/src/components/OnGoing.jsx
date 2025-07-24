import React from 'react'
import IpoCard from './IpoCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const OnGoing = () => {
    const [loading, setLoading] = useState(true);
    const [ipoData, setIpoData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/ipo/ongoing-ipos')
            .then((res) => {
                setIpoData(res.data);
                setLoading(false);
            }).catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, []);
    const location = useLocation();
    const isFullPage = location.pathname === '/bluestock/ipo/ongoing-ipo'

    return (
        <section className='py-10 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-xl font-semibold text-gray-800'>Ongoing</h3>
                        <p className='text-sm text-gray-600 mt-1 max-w-2xl'>Companies where the IPO investment process is started and will be listed soon in the stock market for regular trading.</p>
                    </div>
                    {!isFullPage && (
                        <Link
                            to='/bluestock/ipo/ongoing-ipo'
                            className='text-blue-600 text-sm font-semibold hover:underline'
                        >
                            View All
                        </Link>
                    )}
                </div>{
                    loading ?
                        <p>loading...</p>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                ipoData.map((ipo) => (
                                    
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

                                ))
                            }
                        </div>
                }

            </div>
        </section>
    )
}

export default OnGoing
