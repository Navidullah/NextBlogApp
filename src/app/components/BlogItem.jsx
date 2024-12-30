import Link from "next/link";
import React from "react";
import { blogs } from "@/assets/BlogData";

const BlogItem = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      <p className="text-gray-600 text-center mb-12">
        Explore our collection of insightful and engaging blogs.
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" shadow-md overflow-hidden bg-white hover:scale-105 transform transition-all duration-300"
          >
            {/* Blog Image */}
            <Link href={`/blogs/${blog.id}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
            </Link>

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {blog.description.length > 150
                  ? `${blog.description.substring(0, 150)}...`
                  : blog.description}
              </p>

              {/* Author and Date */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              {/* Read More Button */}
              <Link
                href={`/blogs/${blog.id}`}
                className="block mt-4 text-blue-500 font-medium hover:text-blue-700"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogItem;
