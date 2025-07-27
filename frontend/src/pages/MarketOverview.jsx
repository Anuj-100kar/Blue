import React from 'react'
import IndicesCharts from '../components/IndicesCharts'
import GlobalMarkets from '../components/GlobalMarkets'
import HeatMap from '../components/HeatMap'
import TopNews from '../components/TopNews'
import TopGainers from '../components/TopGainers'

const MarketOverview = () => {
  return (
       <div className="p-6 bg-[#0f172a] min-h-screen text-white space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <IndicesCharts />
        <GlobalMarkets />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <HeatMap />
        <TopNews />
        <TopGainers />
      </div>
    </div>
  )
}

export default MarketOverview
