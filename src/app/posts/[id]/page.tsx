'use client';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import Footer from '@/components/Footer';

const posts = [
  {
    id: "1",  // Make sure all ids are strings
    title: "HTML Block Of WebDevelopment",
    description: "Explore the world of HTML, the backbone of every web page",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "2",  // Changed from number to string
    title: "Machine Learning Basics",
    description: "A dynamic subset of AI that focuses on developing algorithms that enable computers to learn from and make predictions based on data.",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "3",  // Changed from number to string
    title: "Deep learning explained",
    description: "Deep learning is a revolutionary subfield of machine learning that employs neural networks to model complex patterns based on data.",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "4",  // Changed from number to string
    title: "Natural language processing",
    description: "Understanding NLP concepts, techniques, and applications including sentiment analysis and chatbots enhancing human-computer interaction.",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "5",  // Changed from number to string
    title: "AI in healthcare",
    description: "AI is transforming healthcare by improving diagnostics, personalized medicines, and predictive analytics for better patient outcomes.",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "6",  // Changed from number to string
    title: "Data preprocessing techniques",
    description: "Learn essential data preprocessing techniques to enhance model performance, including data cleaning, feature engineering, and splitting.",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "7",  // Changed from number to string
    title: "Building your first neural network",
    description: "Follow a step-by-step guide to create a neural network from scratch, covering architecture, training, and evaluation best practices.",
    image: "/images.jpg",  // Corrected image path
  },
  {
    id: "8",  // Changed from number to string
    title: "Ethics in AI",
    description: "Delve into ethical considerations in AI, focusing on transparency and accountability in the development of responsible AI technologies.",
    image: "/images.jpg",  // Corrected image path
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);  // Since both id and post.id are strings, no error

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">{post.title}</h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}
