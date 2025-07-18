import React, { useState } from 'react'
import BlogCard from '../components/BlogCard';
import { blogData } from '../Data/IpoData';

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    const totalPages = Math.ceil(blogData.length / blogsPerPage);

    const paginatedBlogs = blogData.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    return (
        <>
            <div className="px-4 mt-6 ml-4">
                <p className="text-sm text-gray-500 mb-2">
                    <span className="hover:text-blue-500 cursor-pointer">Home</span> &gt;{" "}
                    <span className="hover:text-blue-500 cursor-pointer">Blog</span>
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">


                {/* Page title */}
                <h1 className="text-2xl text-gray-900 font-bold mb-10 text-center">BLUESTOCK BLOG</h1>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedBlogs.map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 rounded-md border ${currentPage === i + 1
                                    ? "bg-purple-500 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPage
