import React from 'react'
import {brokers} from '../Data/IpoData';

const BrokersTable = () => {
  return (
      <section className="px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Compare and choose <br />
          <span className="text-blue-600">Best Stock Broker for you</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white text-left text-sm">
              <tr>
                <th className="p-4">Broker Name</th>
                <th className="p-4">Account Opening</th>
                <th className="p-4">AMC</th>
                <th className="p-4">Brokerage</th>
                <th className="p-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              {brokers.map((broker, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-4 font-medium">{broker.name}</td>
                  <td className="p-4">{broker.accountOpening}</td>
                  <td className="p-4">{broker.amc}</td>
                  <td className="p-4">{broker.brokerage}</td>
                  <td className="p-4 font-semibold text-green-600">{broker.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default BrokersTable
