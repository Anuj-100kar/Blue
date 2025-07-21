import React, { useState } from 'react'
import { faq } from '../Data/IpoData';

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Frequently Asked Questions?</h3>
            <p className='text-sm text-gray-600 mt-1 max-w-2xl'>Find answers to common questions that come in your mind related to IPO.</p>
          </div>
          
        </div>
        <div className="space-y-4">
          {faq.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 bg-gray-100 font-medium text-gray-800 flex justify-between items-center"
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 bg-white text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ
