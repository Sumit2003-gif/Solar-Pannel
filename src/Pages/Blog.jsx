import React from 'react';
import BlogSection from '../Components/BlogSection';

const Blog = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg"
          alt="Solar Blog Header"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 drop-shadow-md">
            Solar Blog
          </h1>
          <p className="text-gray-200 text-sm md:text-lg mt-2 max-w-xl drop-shadow-sm">
            Discover the latest trends, innovations, and insights in solar energy, technology, and sustainability.
          </p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <BlogSection />
    </div>
  );
};

export default Blog;
