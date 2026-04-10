import React, { useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const ApplyIPO = () => {
    const navigate=useNavigate();
  const { id } = useParams();

  const [quantity, setQuantity] = useState("");
  const [upi, setUpi] = useState("");

  const handleApply = async () => {
  try {
    await axios.post("http://localhost:5000/api/apply", {
      ipo_id: id,
      quantity,
      upi_id: upi,
    });

    // redirect here
    navigate("/user/applications");

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Apply for IPO
        </h2>

        {/* IPO ID */}
        <p className="text-sm text-gray-500 mb-4 text-center">
          IPO ID: {id}
        </p>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Quantity (Lots)
          </label>
          <input
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* UPI */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            UPI ID
          </label>
          <input
            type="text"
            placeholder="example@upi"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleApply}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Submit Application
        </button>

      </div>
    </div>
  );
};

export default ApplyIPO;