import React, { useState } from 'react'
import axios from 'axios'

const ListedForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    ipo_price: '',
    listing_price: '',
    listing_gain: '',
    listing_date: '',
    cmp: '',
    current_return: '',
    status: 'listed'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');

      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      await axios.post("http://localhost:5000/api/ipo/listed-ipo", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Listed IPO Added ✅");

    } catch (err) {
      console.error(err);
      alert("Error ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Add Listed IPO
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter details for a newly listed IPO
        </p>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            name="company_name"
            placeholder="Company Name"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="ipo_price"
            placeholder="IPO Price"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="listing_price"
            placeholder="Listing Price"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="listing_gain"
            placeholder="Listing Gain"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="listing_date"
            type="date"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="cmp"
            placeholder="CMP"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="current_return"
            placeholder="Current Return (%)"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Add Listed IPO
          </button>
        </div>

      </div>
    </div>
  );
};

export default ListedForm;