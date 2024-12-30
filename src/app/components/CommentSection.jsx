"use client";

import React, { useState } from "react";

const CommentSection = () => {
  // Comment Section States
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [commenterImage, setCommenterImage] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "" || commenterName.trim() === "") return;

    const comment = {
      id: Date.now(),
      text: newComment,
      name: commenterName,
      image: commenterImage,
    };
    setComments([...comments, comment]);
    setNewComment("");
    setCommenterName("");
    setCommenterImage("");
  };

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4">Comments:</h2>
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border p-3 rounded bg-gray-100 dark:bg-gray-800 flex items-center"
            >
              <img
                src={comment.image}
                alt={comment.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{comment.name}</p>
                <p>{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* New Comment Input */}
      <input
        type="text"
        value={commenterName}
        onChange={(e) => setCommenterName(e.target.value)}
        className="w-full p-3 border rounded mt-4 dark:bg-background"
        placeholder="Your name..."
      />
      <input
        type="text"
        value={commenterImage}
        onChange={(e) => setCommenterImage(e.target.value)}
        className="w-full p-3 border rounded mt-2 dark:bg-background"
        placeholder="Image URL..."
      />
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-3 border rounded mt-2 dark:bg-background"
        placeholder="Write a comment..."
      ></textarea>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default CommentSection;
