import React from 'react'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const ComplaintsShareHolding = () => {
    const complaintsData = [
  { year: '2016', angel: 10, zerodha: 5 },
  { year: '2017', angel: 20, zerodha: 12 },
  { year: '2018', angel: 45, zerodha: 25 },
  { year: '2019', angel: 60, zerodha: 50 },
  { year: '2020', angel: 80, zerodha: 70 },
  { year: '2021', angel: 95, zerodha: 85 },
  { year: '2022', angel: 60, zerodha: 50 },
  { year: '2023', angel: 40, zerodha: 35 },
];

const shareHoldingData = [
  { category: 'Retail', angel: 80, zerodha: 60 },
  { category: 'HNI', angel: 60, zerodha: 45 },
  { category: 'Institutional', angel: 40, zerodha: 30 },
  { category: 'Foreign', angel: 25, zerodha: 20 },
  { category: 'Promoters', angel: 15, zerodha: 5 },
];

  return (
    <div className="my-10 space-y-10">
      {/* Complaints Line Chart */}
      <div>
        <h2 className="text-xl font-bold mb-4">Complaints</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={complaintsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="angel" stroke="#34d399" name="Angel One" />
            <Line type="monotone" dataKey="zerodha" stroke="#60a5fa" name="Zerodha" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Share Holding Bar Chart */}
      <div>
        <h2 className="text-xl font-bold mb-4">Share Holding</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={shareHoldingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="angel" fill="#34d399" name="Angel One" />
            <Bar dataKey="zerodha" fill="#60a5fa" name="Zerodha" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ComplaintsShareHolding
