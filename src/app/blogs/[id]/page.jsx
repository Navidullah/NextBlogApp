import React from "react";

import { blogs } from "@/assets/BlogData"; // Assuming this is the path to your blog data
import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import CommentSection from "@/app/components/CommentSection";

const Page = async ({ params }) => {
  const { id } = await params; // Destructuring params to get the blog ID

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found</div>;
  }

  // Construct the current URL based on the blog ID
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""; // Dynamic URL

  return (
    <div className="max-w-3xl mt-8 mx-auto p-6 border-gray-500 rounded-lg shadow-lg bg-white dark:bg-background">
      {/* Blog Title */}
      <div className="flex justify-center mb-4">
        <h1 className="text-4xl mb-4 font-bold text-cyan-800 dark:text-cyan-500">
          {blog.title}
        </h1>
      </div>

      {/* Author and Image */}
      <div className="flex flex-col justify-between items-center mb-4 mt-4">
        <img
          src={blog.authorImage}
          alt={blog.author}
          className="w-[50px] h-[50px] rounded-full mb-3"
        />
        <span className="italic">By {blog.author}</span>
      </div>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-lg"
      />

      {/* Blog Date */}
      <div className="flex justify-between text-gray-400 dark:text-cyan-400 mt-2 mb-4">
        <span className="italic">
          {new Date(blog.date).toLocaleDateString()}
        </span>
      </div>

      {/* Blog Content */}
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
        {blog.description}
      </p>

      {/* Share Buttons */}
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

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Page;

/*const page = ({ params }) => {
  const [data, setData] = useState("");
  const { id } = params;

  const fetchBlogData = () => {
    for (let i = 0; i < blogs.length; i++) {
      if (Number(id) === blogs[i].id) {
        setData(blogs[i]);

        console.log(blogs[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-6  border-gray-500 rounded-lg shadow-lg bg-white dark:bg-background">
      <div className="flex justify-center mb-4">
        <h1 className="text-3xl font-bold  text-cyan-500">{data.title}</h1>
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-auto rounded-lg"
      />

      <div className="flex justify-between text-gray-400 dark:text-cyan-400 mt-2 mb-4">
        <span className="italic">By {data.author}</span>
        <span className="italic">
          {new Date(data.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
        {data.description}
      </p>
    </div>
  );
};

export default page;
*/
