import React from 'react';
import { FaUser, FaCommentDots, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';

const BrokerCard = ({
  name,
  logo,
  rating,
  reviews,
  accounts,
  features,
  charges,
  openLink,
}) => {

  const renderstars = () => {
    const fullstars = Math.floor(rating);
    const halfstars = rating % 1 >= 0.5;
    const emptystars = 5 - fullstars - (halfstars ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullstars }, (_, i) => <MdStar key={`full-${i}`} className="text-yellow-500" />)}
        {halfstars && <MdStarHalf className="text-yellow-500" />}
        {Array.from({ length: emptystars }, (_, i) => <MdStarBorder key={`empty-${i}`} className="text-yellow-500" />)}
      </>
    )
  }
  return (
    <div className="flex flex-col md:flex-row justify-between items-start border rounded-2xl p-6 shadow-sm bg-white w-full max-w-4xl mx-auto mb-6">

      {/* Left Section */}
       <div className="md:hidden w-full flex justify-start">
        <img src={logo} alt={`${name} logo`} className="w-12 h-12 object-contain" />
      </div>
      <div className="w-full md:w-1/3 space-y-3">
        <h2 className="text-xl font-bold">{name}</h2>

        {/* Ratings & Accounts */}
        <div className="flex items-center space-x-1">
          {renderstars()}
        </div>

        <div className="flex flex-wrap sm:mt-4 items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center gap-1"><FaCommentDots /> {reviews} Reviews</span>
          <span className="flex items-center gap-1"><FaUser /> {accounts} Accounts</span>
        </div>

        <p className="text-sm text-gray-700 font-semibold">Open Demat A/c for FREE</p>

        <div className="flex gap-2">
          <a
            href={openLink}
            className="bg-black text-white px-4 py-1 text-sm rounded-md"
          >
            Open A/C
          </a>
          <button className="bg-white border px-4 py-1 text-sm rounded-md shadow-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* MIDDLE: Features */}
      <div className='w-full md:w-2/5 flex flex-row gap-5 justify-between mx-auto px-4 py-2'>
        <div className="flex flex-col gap-5">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-800">
              <FaCheckCircle className="text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>


        <div className="flex flex-col gap-4 text-sm text-gray-800">
          {charges.map(({ title, value }, idx) => (
            <div key={idx}>
              <span className="font-semibold">{title}</span>
              <div className="flex items-center gap-1">
                <span>{value}</span>
                <FaInfoCircle className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
        
          </div>
           <div className="hidden md:flex md:w-1/4 justify-end items-center pl-5">
          <img src={logo} alt={`${name} logo`} className="w-40 h-36 object-contain" />
        </div>
   
    </div>
  );
};

export default BrokerCard;
