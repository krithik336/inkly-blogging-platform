'use client';

import { useState } from 'react';
import axios from 'axios';

export default function CreateBlogPage() {

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [blog, setBlog] = useState('');
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/ai/generate",
        {
          topic
        }
      );

      setBlog(response.data.blog);

    } catch (error) {

      console.log(error);

      alert("AI Blog Generation Failed");

    } finally {

      setLoading(false);

    }

  };

  const saveBlog = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.post(

        "http://localhost:5000/api/blogs",

        {
          title,
          content: blog
        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      alert("Blog Saved Successfully");

    } catch (error) {

      console.log(error);

      alert("Failed To Save Blog");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Create AI Blog
      </h1>

      <div className="max-w-4xl">

        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-900 mb-5"
        />

        <input
          type="text"
          placeholder="Enter Blog Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-900 mb-5"
        />

        <button
          onClick={generateBlog}
          className="bg-blue-500 px-6 py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate AI Blog"}
        </button>

        <textarea
          rows={15}
          value={blog}
          readOnly
          className="w-full p-5 rounded-lg bg-gray-900 mt-8"
        />

        <button
          onClick={saveBlog}
          className="bg-green-500 px-6 py-3 rounded-lg mt-5"
        >
          Save Blog
        </button>

      </div>

    </div>

  );

}