import React from 'react'
import { ongoingipos } from '../Data/IpoData'
import IpoCard from './IpoCard'
import { useLocation ,Link} from 'react-router-dom'

const OnGoing = () => {
    const location = useLocation();
    const isFullPage = location.pathname==='/bluestock/ipo/ongoing-ipo'

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
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        ongoingipos.map((ipo, index) => (
                            <IpoCard key={index} {...ipo} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OnGoing
