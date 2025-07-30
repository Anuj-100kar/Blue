import React from 'react'
import { assets } from '../assets/assets'

const UserHeader = () => {
    return (
        <div className="h-16 bg-[#1F2937] text-white flex items-center justify-between px-4 sm:px-6 gap-3 sm:gap-2">
            <input
                type="text"
                placeholder="Search"
                className="w-full sm:w-64 bg-[#374151] p-2 rounded text-sm outline-none"
            />
            <div className="flex items-center gap-2 sm:gap-4 ml-2 sm:ml-0">
                <span className="hidden sm:block text-sm">Parth Rathi</span>
                <img
                    src={assets.prof}
                    alt="avatar"
                    className="rounded-full w-8 h-8"
                />
            </div>
        </div>
    )
}

export default UserHeader
