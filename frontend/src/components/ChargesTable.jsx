import React from 'react'

const ChargesTable = () => {
  return (
    <div className="overflow-x-auto shadow p-4">
      <h3 className="text-lg font-bold mb-2">Brokerage Charges</h3>
      <table className="table-auto w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Angel One</th>
            <th className="border p-2">Zerodha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Equity</td>
            <td className="border p-2">₹20</td>
            <td className="border p-2">₹20</td>
          </tr>
          {/* More rows */}
        </tbody>
      </table>
    </div>
  )
}

export default ChargesTable
