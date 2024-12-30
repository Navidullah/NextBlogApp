"use client";

import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"; // Import social media icons
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Blogs
          </Link>
          <Link
            href="/learn"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Learn
          </Link>
        </div>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            <FiFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            <FiTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            <FiInstagram size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
