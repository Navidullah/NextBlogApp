"use client";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import Link from "next/link";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  useEffect(() => {
    // Check for saved user preference
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Save user preference to local storage
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <header
      className={`font-sm text-lg  bg-white text-gray-500 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 sticky top-0 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/favicon.ico" alt="Logo" width="50" height="50" />
          <h1 className="text-lg font-extrabold text-gray-800 dark:text-white ml-2">
            <Link href="/">MyBlog</Link>
          </h1>
        </div>

        {/* Navbar Links */}
        <nav
          className={`hidden md:flex space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="text-gray-600  hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-600 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
          >
            Blogs
          </Link>
          <Link
            href="/learn"
            className="text-gray-600 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
          >
            Learn
          </Link>
        </nav>
        <div>
          {/* Mode Toggle Button */}
          <button
            onClick={toggleMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 md:hidden"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />} {/* Show X when menu is open */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 py-4 bg-white dark:bg-gray-800">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded w-full"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded w-full"
          >
            Blogs
          </Link>
          <Link
            href="/learn"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded w-full"
          >
            Learn
          </Link>
        </div>
      )}
    </header>
  );
}
