import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const IndicesCharts = () => {
    const data = [
  { time: '09:30', sp500: 100, dow: 105, nasdaq: 98 },
  { time: '10:00', sp500: 98, dow: 106, nasdaq: 99 },
  // ...
];

    return (
        <div className="bg-[#1E293B] p-4 rounded text-white">
            <p className="mb-2">Indices</p>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Line type="monotone" dataKey="sp500" stroke="#38bdf8" />
                    <Line type="monotone" dataKey="dow" stroke="#34d399" />
                    <Line type="monotone" dataKey="nasdaq" stroke="#f87171" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IndicesCharts
