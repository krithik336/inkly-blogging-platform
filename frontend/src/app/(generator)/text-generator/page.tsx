'use client';

import GeneratorInput from '@/components/generator/generator-input';
import { GradientBlob } from '@/components/gradient-blob';
import axios from 'axios';
import { useState } from 'react';

export default function Page() {

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generateBlog = async (e: any) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ai/generate",
        {
          topic: prompt
        }
      );

      setResponse(res.data.blog);

    } catch (error) {

      console.log(error);

      alert("AI Generation Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen text-white flex flex-col justify-between">

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          AI Blog Generator
        </h1>

        <div className="bg-gray-900 p-6 rounded-2xl whitespace-pre-wrap">
          {loading
            ? "AI is thinking..."
            : response || "Generated blog will appear here..."
          }
        </div>

      </div>

      <div className="px-5 md:px-12 pb-10">

        <form onSubmit={generateBlog}>

          <GeneratorInput
            value={prompt}
            onChange={(e: any) => setPrompt(e.target.value)}
          />

        </form>

        <GradientBlob />

      </div>

    </div>

  );

}