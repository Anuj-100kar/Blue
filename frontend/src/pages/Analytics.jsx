import React from 'react'
import Header from '../components/Header';

const Analytics = () => {
  const tableheaders = [
        "COMPANY", "OPEN", "HIGH", "LOW", "PREV CLOSE", "LTE", "CHNG", "%CHNG", "VOLUME", "VALUE", "52W H", "52W L", "30D %CHNG",
        "TODAY"
    ];

    const dummyrow = {
        company: "Apple",
        open: "21456.00",
        high: "21465.00",
        low: "21405.00",
        prevclose: "21450.00",
        lte: "21460.00",
        chng: "73.8",
        pctchng: "4.36",
        volume: "2,10,00,000",
        value: "2019.56",
        high52: "21843.45",
        low52: "16837.75",
        chng30d: "9.10",
        today: "graph"
    };


    return (
        <div className='p-4 bg-white min-h-screen'>

            <div className='flex items-center justify-between border-b pb-2 mb-4'>
                <h1 className='text-2xl font-bold'>NIFTY 50 </h1>
                <input type="text" placeholder='search company' className='border px-3 py-1 rounded-md' />
            </div>

            <div className='text-sm mb-4'>
                <span className='text-red-500 font-medium'>Today Market Not Closed</span> as on 09 Jan 2024 18.00.00 IST
            </div>

            {/**status  */}
            <div className='flex space-x-4 text-sm mb-4'>
                <span className='text-green-600'>Advance: 20</span>
                <span className='text-red-600'>Decline: 30</span>
                <span>Unchanged: 0</span>
            </div>

            {/**table */}
            <div className='overflow-x-auto border rounded'>
                <table className='min-w-full text-sm text-left table-auto'>
                    <thead className='bg-gray-100 text-gray-700'>
                        
                        <tr>
                            {tableheaders.map((head, i) => (
                                <th key={i} className='px-4 py-2 border'>{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 20 }).map((_, idx) => (
                            <tr key={idx} className={idx === 0 ? 'bg-red-100' : ''}>
                                <td className="px-4 py-2 border">{dummyrow.company}</td>
                                <td className="px-4 py-2 border">{dummyrow.open}</td>
                                <td className="px-4 py-2 border">{dummyrow.high}</td>
                                <td className="px-4 py-2 border">{dummyrow.low}</td>
                                <td className="px-4 py-2 border">{dummyrow.prevclose}</td>
                                <td className="px-4 py-2 border">{dummyrow.lte}</td>
                                <td className="px-4 py-2 border">{dummyrow.chng}</td>
                                <td className="px-4 py-2 border">{dummyrow.pctchng}</td>
                                <td className="px-4 py-2 border">{dummyrow.volume}</td>
                                <td className="px-4 py-2 border">{dummyrow.value}</td>
                                <td className="px-4 py-2 border">{dummyrow.high52}</td>
                                <td className="px-4 py-2 border">{dummyrow.low52}</td>
                                <td className="px-4 py-2 border">{dummyrow.chng30d}</td>
                                <td className="px-4 py-2 border text-blue-600 underline cursor-pointer">{dummyrow.today}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Analytics
