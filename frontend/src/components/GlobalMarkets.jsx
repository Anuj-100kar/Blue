import React from 'react'

const GlobalMarkets = () => {
      const markets = [
    { name: 'FTSE', change: '+0.35%' },
    { name: 'DAX', change: '-0.15%' },
    { name: 'NIKKEI', change: '+0.60%' },
    // ...
  ];
    return (
        <div className="bg-[#1E293B] p-4 rounded text-white">
            <p className="mb-2">Global Markets</p>
            <div className="flex flex-wrap gap-2">
                {markets.map((m, idx) => (
                    <span
                        key={idx}
                        className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold ${m.change.startsWith('+') ? 'bg-green-500' : 'bg-red-500'
                            }`}
                    >
                        {m.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default GlobalMarkets
