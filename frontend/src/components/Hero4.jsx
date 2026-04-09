import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Hero4 = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (phone.length !== 10) return alert("enter valid phone number");

    await axios.post("http://localhost:5000/api/early-access", { phone });
    alert("saved");
  };
  return (
    <section className="text-start px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Free & Open <br />
        <span className="text-blue-600">Stock Market Analytics</span> <br />
        For GenZ!
      </h1>
      <p className='text-gray-500 text-sm mt-3'>Thousands of traders and investors in India use our<br />
        stable and reliable mobile app regularly.</p>
      <p className="mt-6 text-sm text-gray-600">
        <strong>Get early access</strong>
      </p>
      <div className="mt-2">
        <input
          type="tel"
          placeholder="+91 | Enter your mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />
        <button
          onClick={handleSubmit}
          className="mt-2 w-60 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </section>
  )
}

export default Hero4
