import React from 'react'
import Header from '../components/Header'
import { productdata } from '../Data/IpoData'
import ProductCard from '../components/ProductCard'

const Product = () => {
    return (
        <div >
            <Header />
            <div className='px-4 py-10 bg-blue-50 mt-10'>
                <div className='ml-10' >
                    <h1 className='text-3xl font-bold mb-8'>Best-in-class <br />Technology & <br />Platforms</h1>
                    <p>Our products & services aim to help active <br />traders & investors in India gain a winning <br />edge in the stock markets.</p>
                </div>
            </div>
            <div className='max-w-7xl mx-auto px-4 py-10'>


                {
                    productdata.map((section, index) => (
                        <div key={index} className='mb-12'>
                            <div className={`rounded-lg p-4 mb-6 ${index === 0 ? 'bg-green-50' : index === 1 ? 'bg-indigo-50' : 'bg-purple-100'}`}>
                                <h2 className='text-xl font-semibold mb-2'>{section.section}</h2>
                                <p className='text-gray-700'>{section.description}</p>
                            </div>
                            <div className='flex flex-wrap gap-4'>
                                {
                                    section.cards.map((card, idx) => (
                                        <ProductCard key={idx} title={card.title} description={card.description} />
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Product
