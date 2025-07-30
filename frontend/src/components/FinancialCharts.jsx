import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const FinancialCharts = ({data}) => {
  return (
  <div className="my-6">
    <h2 className="text-lg font-bold mb-2">Financials</h2>
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="angel" fill="#34d399" />
      <Bar dataKey="zerodha" fill="#60a5fa" />
    </BarChart>
  </div>
  )
}

export default FinancialCharts
