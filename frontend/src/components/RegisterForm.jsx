import React, { useState } from 'react'
import InputField from './InputField'
import axios from 'axios'

const RegisterForm = () => {

  const [formData, setFormData] = useState({
    company_name: '',
    price_band: '',
    open_date: '',
    close_date: '',
    issue_size: '',
    issue_type: '',
    listing_date: '',
    status: 'upcoming',

    
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
    const token = localStorage.getItem('token');

    const data = new FormData();

    // append all fields
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    const res = await axios.post(
      "http://localhost:5000/api/ipo",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
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
        <input
          type="file"
          name="logo"
          onChange={(e) => {
            setFormData({
              ...formData,
              logo: e.target.files[0]
            });
          }}
        />
        <InputField label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} />

        <InputField label="Price Band" name="price_band" value={formData.price_band} onChange={handleChange} />

        <InputField label="Open" name="open_date" value={formData.open_date} onChange={handleChange} />

        <InputField label="Close" name="close_date" value={formData.close_date} onChange={handleChange} />

        <InputField label="Issue Size" name="issue_size" value={formData.issue_size} onChange={handleChange} />

        <InputField
          label="Issue Type"
          name="issue_type"
          type="select"
          options={['Book Built', 'Fixed Price']}
          value={formData.issue_type}
          onChange={handleChange}
        />

        <InputField
          label="Listing Date"
          name="listing_date"
          type="date"
          value={formData.listing_date}
          onChange={handleChange}
        />

        <InputField
          label="Status"
          name="status"
          type="select"
          options={['upcoming', 'ongoing', 'listed']}
          value={formData.status}
          onChange={handleChange}
        />
      </div>

      {/* Section 2 */}
     

      

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