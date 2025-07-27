import React from 'react'

const TopGainers = () => {
    const topGainers = [
  { symbol: 'AAPL', name: 'Apple', price: 123, change: '+6.50%' },
  { symbol: 'JPM', name: 'JPM Chase', price: 121, change: '+21.7%' },
  { symbol: 'UBER', name: 'Uber', price: 43, change: '+3.4%' },
  // Add more
];
    return (
        <div className="bg-[#1E293B] p-4 rounded-lg shadow-md text-white">
            <h2 className="text-lg font-semibold mb-4">Top Gainers</h2>
            <div className="grid grid-cols-4 gap-2 text-sm font-medium">
                <div>Symbol</div>
                <div>Name</div>
                <div>Price</div>
                <div>Change</div>
            </div>
            <div className="mt-2 space-y-2">
                {topGainers.map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 text-sm">
                        <div>{item.symbol}</div>
                        <div className="truncate">{item.name}</div>
                        <div>${item.price}</div>
                        <div className="text-green-400">{item.change}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopGainers
