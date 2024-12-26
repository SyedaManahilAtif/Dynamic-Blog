import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Mega() {
  const posts = [
    {
      id: "1", // Changed id to string
      title: "HTML Block Of Web Development",
      description: "Explore the world of HTML, the backbone of every web page.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "HTML basics", // Added missing 'data' field
    },
    {
      id: "2",
      title: "Machine Learning Basics",
      description:
        "A dynamic subset of AI that focuses on developing algorithms that enable computers to learn from and make predictions based on data.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "Machine Learning Introduction",
    },
    {
      id: "3",
      title: "Deep Learning Explained",
      description:
        "Deep learning is a revolutionary subfield of machine learning that employs neural networks to model complex patterns based on data.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "Deep Learning Basics",
    },
    {
      id: "4",
      title: "Natural Language Processing",
      description:
        "Understanding NLP concepts, techniques, and applications including sentiment analysis and chatbots enhancing human-computer interaction.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "NLP Concepts",
    },
    {
      id: "5",
      title: "AI in Healthcare",
      description:
        "AI is transforming healthcare by improving diagnostics, personalized medicines, and predictive analytics for better patient outcomes.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "AI and Healthcare",
    },
    {
      id: "6",
      title: "Data Preprocessing Techniques",
      description:
        "Learn essential data preprocessing techniques to enhance model performance, including data cleaning, feature engineering, and splitting.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "Data Preprocessing",
    },
    {
      id: "7",
      title: "Building Your First Neural Network",
      description:
        "Follow a step-by-step guide to create a neural network from scratch, covering architecture, training, and evaluation best practices.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "Neural Network Basics",
    },
    {
      id: "8",
      title: "Ethics in AI",
      description:
        "Delve into ethical considerations in AI, focusing on fairness, transparency, and accountability in developing responsible AI technologies.",
      date: "2024-12-27",
      imageUrl: "/images.jpg", // Corrected image path
      data: "AI Ethics",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
