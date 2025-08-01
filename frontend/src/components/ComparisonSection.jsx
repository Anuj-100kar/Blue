import React from 'react'

const ComparisonSection = () => {
    const data=[{
        borker:'Angel One',
        pros:[
            "Angel One charges zero account opening charges as well as zero annual maintenance charges for only the first yea",
            "Zero brokerage charges for equity delivery and remaining segments like intraday and F&O which is flat Rs. 20 per trade."
        ],
        cons:[
            "Call and trade fee is charged at an extra Rs 20 per executed order.",
            "User Interface is a bit complex as it is not for beginners."
        ]
}

     ,{
        broker:'Zerodha',
        pros:[
            "You don't pay any brokerage when you buy shares using cash-and-carry (CNC). Delivery trade has no leverage. Once bought, shares get delivered to your demat account and if sold, shares will get debited from your demat account.",
            "They offer services under a simple pricing model. They charge 0.03% or Rs 20 per executed order, whichever is lower, regardless of the trade size. The maximum brokerage paid by the customer is Rs 20 per trade.",
            "Zerodha is a self-clearing broker. They don't charge clearing charges from customers",
            "Set long-standing stop loss and target orders for your stock investments.",
            "An all-new mobile app built for both, passive investors and active day traders, with significant speed and user experience enhancements."
        ],
        cons:[
            "Doesn't provide stock tips, research reports or recommendations.",
            "Lifetime free AMC demat account plans are not available.",
            "An additional charge of Rs 50 per executed order for MIS/BO/CO positions which are not square off by the customer.",
            "Call & Trade is available at an additional fee of Rs 50 per executed order.",
            "3-in-1 trading account is not available as Zerodha doesn't provide banking services."
        ]
    }];

    return (
    <div className="bg-white p-6 shadow rounded-xl w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Pros & Cons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {
        data.map((brokerData,index)=>(
            <div key={index} className='border rounded-lg shadow-sm p-4'>
                <h3 className='text-xl font-semibold mb-4 text-blue-700'>{brokerData.broker}</h3>
                <table className='w-full border border-gray-300 text-sm'>
                    <thead className='bg-gray-100 text-left'>
                        <tr>
                            <th className='border px-4 py-2 w-1/2 text-green-600'>pros</th>
                            <th className='border px-4 py-2 w-1/2 text-red-600'>cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({
                                length:Math.max(brokerData.pros.length,brokerData.cons.length),
                            }).map((_,i)=>(
                                <tr key={i}>
                                    <td className='border px-4 py-2 break-words'>{brokerData.pros[i] || ''}</td>
                                    <td className='border px-4 py-2 break-words'>{brokerData.cons[i] || ''}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        ))
       }
      </div>
    </div>
    )
}

export default ComparisonSection
