import React from 'react'

const ProductCard = ({title,description}) => {
  return (
   <div className="bg-white border rounded-xl shadow-sm p-4 w-full md:w-[250px] hover:shadow-md transition">
        <div className='p-4 bg-green-100 m-2 items-start h-4 w-4'>

        </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default ProductCard
