import React, { useState } from 'react'
import InputField from './InputField'
import axios from 'axios'

const RegisterForm = () => {

  const [formData, setFormData] = useState({
    companyName: '',
    priceBand: '',
    openDate: '',
    closeDate: '',
    issueSize: '',
    issueType: '',
    listingDate: '',
    status: 'Upcoming',

    ipoPrice: '',
    listingPrice: '',
    cmp: '',
    currentReturn: '',
    gmp: '',
    gmpLink: ''
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/ipo",
        formData
      );

      alert("IPO Added Successfully ✅");
      console.log(res.data);

    } catch (error) {
      console.error(error);
      alert("Error adding IPO ❌");
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl shadow-md p-6 ">

      <h2 className="text-xl font-semibold mb-4">IPO Information</h2>
      <p className='text-gray-600 text-sm mb-2'>Enter IPO Details</p>
      <hr className='mb-4' />

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <InputField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />

        <InputField label="Price Band" name="priceBand" value={formData.priceBand} onChange={handleChange} />

        <InputField label="Open" name="openDate" value={formData.openDate} onChange={handleChange} />

        <InputField label="Close" name="closeDate" value={formData.closeDate} onChange={handleChange} />

        <InputField label="Issue Size" name="issueSize" value={formData.issueSize} onChange={handleChange} />

        <InputField
          label="Issue Type"
          name="issueType"
          type="select"
          options={['Book Built', 'Fixed Price']}
          value={formData.issueType}
          onChange={handleChange}
        />

        <InputField
          label="Listing Date"
          name="listingDate"
          type="date"
          value={formData.listingDate}
          onChange={handleChange}
        />

        <InputField
          label="Status"
          name="status"
          type="select"
          options={['Upcoming', 'Ongoing', 'Listed']}
          value={formData.status}
          onChange={handleChange}
        />
      </div>

      <hr className="my-6" />

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mb-4">New Listed IPO Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <InputField label="IPO Price" name="ipoPrice" value={formData.ipoPrice} onChange={handleChange} />

        <InputField label="Listing Price" name="listingPrice" value={formData.listingPrice} onChange={handleChange} />

        <InputField label="CMP" name="cmp" value={formData.cmp} onChange={handleChange} />

        <InputField label="Current Return (%)" name="currentReturn" value={formData.currentReturn} onChange={handleChange} />

        <InputField label="GMP" name="gmp" value={formData.gmp} onChange={handleChange} />

        <InputField label="GMP PDF Link" name="gmpLink" value={formData.gmpLink} onChange={handleChange} />

      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
          Cancel
        </button>
      </div>

    </div>
  )
}

export default RegisterForm;