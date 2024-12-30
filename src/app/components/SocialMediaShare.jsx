import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

const SocialMediaShare = () => {
  // Construct the current URL based on the blog ID
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""; // Dynamic URL
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Share this blog:</h2>
      <div className="flex space-x-4">
        {/* Facebook Share */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FiFacebook size={32} />
        </Link>

        {/* Twitter Share */}
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
          )}&text=${encodeURIComponent(blog.title)}`}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FiTwitter size={32} />
        </Link>

        {/* LinkedIn Share */}
        <Link
          href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
            currentUrl
          )}`}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FiLinkedin size={32} />
        </Link>

        {/* WhatsApp Share */}
        <Link
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            `${blog.title} - ${currentUrl}`
          )}`}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700"
        >
          <FaWhatsapp size={32} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaShare;
