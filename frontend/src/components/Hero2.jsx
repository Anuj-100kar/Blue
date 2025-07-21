import React from 'react'
import { assets } from '../assets/assets'

const Hero2 = () => {
    return (
        <div className='w-full px-4 bg-blue-600 rounded-xl text-white max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-8'>
                <div className='flex flex-col lg:flex-row items-start overflow-hidden gap-4 lg:w-1/2'>
                    <img className='w-[403px] object-contain -mb-72 ' src={assets.s20} alt="" />
                    <p className='text-xl font-semibold mt-9 text-yellow-400 text-center lg:text-left'>4.4 K+ <br />DOWNLOADS</p>
                </div>
                <div className='flex-1 rounded-xl p-6 space-y-3'>
                    <h3 className='text-2xl lg:text-3xl font-semibold leading-tight'>Enjoy Free Learning, Analytics
                        <br /> Club</h3>
                    <p className='text-sm font-light text-white'>Get the link to download the App</p>
                    <div className='flex flex-col lg:flex-row gap-3 relative max-w-[658px]'>
                        <input className='w-full px-4 py-2 text-black rounded' type="url" />
                        <button className='absolute top-1/2 right-1 -translate-y-1/2 bg-blue-600 text-white hover:bg-blue-700 px-2 py-1 rounded'>send app link</button>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3 pt-4'>
                        <img className='w-30 h-32 object-contain' src={assets.verify} alt="" />
                        <div className='space-y-4'>
                            <img className='h-12 object-contain' src={assets.googleplay} alt="" />
                            <img className='h-12 object-contain' src={assets.appstore} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero2
