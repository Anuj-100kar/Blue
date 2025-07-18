import React from 'react'

const BlogCard = ({title,date,readTime}) => {
  return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer">
      <div className="bg-blue-600 h-40 w-full" /> {/* Placeholder for image */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {date} • {readTime}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
