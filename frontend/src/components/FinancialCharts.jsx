import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const FinancialCharts = ({data}) => {
  return (
  <div className="w-full my-6">
    <h2 className="text-lg font-bold mb-2">Financials</h2>
    <div className='w-full h-[300px]'>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="angel" fill="#34d399" />
      <Bar dataKey="zerodha" fill="#60a5fa" />
    </BarChart>
    </ResponsiveContainer>
    </div>
    
  </div>
  )
}

export default FinancialCharts
