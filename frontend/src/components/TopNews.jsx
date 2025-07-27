import React from 'react'

const TopNews = () => {
    const newsItems = [
  { title: "Retail Sales Slump Takes Toll", time: "3 days ago" },
  { title: "Tech Giant’s Earnings Soar", time: "2 days ago" },
  { title: "High-Profile IPO Falls Short", time: "1 day ago" },
  // Add more
];
    return (
        <div className="bg-[#1E293B] p-4 rounded-lg shadow-md text-white">
            <h2 className="text-lg font-semibold mb-4">Top News</h2>
            <ul className="space-y-2 text-sm">
                {newsItems.map((news, index) => (
                    <li key={index} className="flex justify-between border-b border-gray-600 pb-1">
                        <span className="truncate w-3/4">{news.title}</span>
                        <span className="text-gray-400 text-xs">{news.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopNews
