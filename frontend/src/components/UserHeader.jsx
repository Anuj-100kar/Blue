import React from 'react'
import { assets } from '../assets/assets'

const UserHeader = () => {
    return (
        <div className="h-16 bg-[#1F2937] text-white flex items-center justify-between px-6">
            <input
                type="text"
                placeholder="Search"
                className="bg-[#374151] p-2 rounded text-sm outline-none"
            />
            <div className="flex items-center gap-4">
                <span className="text-sm">Parth Rathi</span>
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
