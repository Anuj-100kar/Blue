import React, { useState } from 'react';
import { question } from '../Data/IpoData';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='ml-4 '>
      <p className='text-xl font-bold text-gray-900 mb-1'>
        Frequently Asked Questions?
      </p>
      <p className='text-sm text-gray-700 mb-4'>
        Find answers to common questions that come in your mind related to IPO.
      </p>

      <div className='flex flex-col font-semibold space-y-3 ml-2'>
        {question.map((item, index) => (
          <div key={index} className='text-sm'>
            <button
              onClick={() => toggleFAQ(index)}
              className='w-full text-left px-3 py-2 shadow-sm border-none bg-gray-100 rounded flex justify-between items-center'
            >
              <span>{item.question}</span>
              <span className='text-gray-500'>{openIndex === index ? '-' : '+'}</span>
            </button>

            {openIndex === index && (
              <div className='px-3 py-2 bg-white text-xs text-gray-700'>
                {Array.isArray(item.answer) ? (
                  <ul className='list-disc list-inside space-y-1'>
                    {item.answer.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
