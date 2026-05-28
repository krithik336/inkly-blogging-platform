'use client';

import Link from 'next/link';

export default function DashboardPage() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex items-center justify-between mb-10">

        <h1 className="text-4xl font-bold">
          AI Blog Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/signin";
          }}
          className="bg-red-500 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-900 p-6 rounded-2xl">

          <h2 className="text-2xl font-semibold mb-3">
            Create AI Blog
          </h2>

          <p className="text-gray-400 mb-5">
            Generate blogs using AI instantly.
          </p>

          <Link
            href="/create-blog"
            className="bg-blue-500 px-5 py-2 rounded-lg inline-block"
          >
            Create Blog
          </Link>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">

          <h2 className="text-2xl font-semibold mb-3">
            My Blogs
          </h2>

          <p className="text-gray-400 mb-5">
            View your saved blogs.
          </p>

          <button
            className="bg-green-500 px-5 py-2 rounded-lg"
          >
            View Blogs
          </button>

        </div>

      </div>

    </div>

  );

}