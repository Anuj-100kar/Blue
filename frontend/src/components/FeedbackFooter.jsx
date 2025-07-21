import React, { useState } from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const FeedbackFooter = () => {
    const [feedback,setFeedback]=useState(null);
    const [likes ,setLikes]=useState(1);
    const [dislikes,setDisLikes]=useState(2);

    const handlefeedback=(type)=>{
        if(feedback) return;
        if(type==='like') setLikes(prev=>prev+1);
        if(type==='dislike') setDisLikes(prev=>prev+1);
        setFeedback(type);
    }

  return (
    <div className='flex flex-col items-center justify-between pt-4 mt-4 border-t'>
      <p className="text-sm text-gray-600 mb-3 font-medium">Did you like this?</p>
      <div className='flex items-center gap-4 text-xl'>
        <button onClick={()=>handlefeedback('like')}
        disabled={!!feedback}
        className={`transition-all cursor-pointer ${feedback==='like' ? 'text-blue-600 scale-110':'text-gray-500 hover:text-blue-600'}`}
        >
            <FaThumbsUp/>
            <span className='text-black text-base font-semibold'>{likes}</span>
        </button>
        <button onClick={()=>handlefeedback('dislike')}
        disabled={!!feedback}
        className={`cursor-pointer transition-all ${feedback==='dislike' ? 'text-red-600 scale-110':'text-gray-500 hover:text-red-600'}`}
        >
            <FaThumbsDown/>
            <span className='text-black text-base font-semibold'>{dislikes}</span>
        </button>
      </div>
    </div>
  )
}

export default FeedbackFooter
