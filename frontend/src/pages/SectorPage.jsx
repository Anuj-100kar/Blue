import React, { useState } from 'react'
import Header from '../components/Header'
import { sectordata } from '../Data/IpoData';
import SectorCard from '../components/SectorCard';

const SectorPage = () => {
    const [search, setSearch] = useState('');

    const filteredSectors =sectordata.filter(sector =>
        sector.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='p-6'>
            <div className="mb-6 mt-4">
                <p className="text-sm text-gray-500 mb-2">
                    <span className="hover:text-blue-500 cursor-pointer">Home</span> &gt;{" "}
                    <span className="hover:text-blue-500 cursor-pointer">Blog</span>
                </p>
                <h1 className="text-2xl font-bold mt-2">Sector</h1>
                <p className="text-gray-600 text-sm mt-1">Go to your favourite sector and analyse it in detail.</p>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for a sector"
                    className="border px-4 py-2 rounded-lg w-full max-w-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {filteredSectors.map((sector, index) => (
                    <SectorCard key={index} {...sector} />
                ))}
            </div>

        </div>
    )
}

export default SectorPage
