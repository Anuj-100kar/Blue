import React from 'react'
import axios from 'axios';

const IpoCard = ({
    id,
    logo,
    name,
    priceBand,
    openDate,
    closeDate,
    issueSize,
    issueType,
    listingDate,
    onDelete

}) => {

    const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/ipo/${id}`);
    console.log('IPO deleted');
    onDelete(); // refresh list
  } catch (err) {
    console.error(err);
  }
};
    return (
        
        <div className='bg-white rounded-xl shadow p-6 flex flex-col gap-4 max-w-[542px] max-h-[450px]' >
            <div className='flex items-center gap-2 mb-3'>
                <img src={`http://localhost:5000${logo}`} alt="" className='w-8 h-8 rounded-full object-cover' />
                <h3 className='text-blue-500 font-semibold text-base leading-tight'>{name}</h3>
            </div>
            <div className=' text-sm text-gray-700 flex flex-col mb-4 gap-2'>

                <div className='grid grid-cols-3 gap-x-4 gap-y-2'>
                    <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-gray-500'>PRICE BAND</span>
                        <span className='text-gray-700'>{priceBand}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>OPEN</span>
                        <span className='text-gray-700'>{openDate}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>CLOSE</span>
                        <span className='text-gray-700'>{closeDate}</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-6'>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>ISSUE SIZE</span>
                        <span className='text-gray-700'>{issueSize}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>ISSUE TYPE</span>
                        <span className='text-gray-700'>{issueType}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-xs font-semibold text-gray-500'>LISTING DATE</span>
                        <span className='text-gray-700'>{listingDate}</span>
                    </div>
                </div>

            </div>
            <div className='flex gap-3 justify-start'>
                <button className='text-gray-800 px-4 py-2 bg-blue-200 text-xs rounded-md'>RHP</button>
                <button className='text-gray-800 px-4 py-2 bg-blue-200 text-xs rounded-md'>DRHP</button>
                <button onClick={()=>handleDelete(id)} className='text-white px-4 py-2 bg-red-400 text-xs rounded-md'>delete</button>
                
            </div>
        </div>
    )
}

export default IpoCard
