import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { blogData } from './Blogdata';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleHeadingClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const latestPosts = blogData.slice(0, 3);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-10">
        {/* Latest Posts Section */}
        <motion.div
          className="lg:w-1/3 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <motion.h1
            onClick={handleHeadingClick}
            className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-6 cursor-pointer select-none hover:text-white transition-colors"
            title="Click to scroll to top"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ⚡ Latest Insights
          </motion.h1>

          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative bg-black rounded-lg shadow-md shadow-white/10 hover:shadow-orange-500/40 transition-shadow duration-300 cursor-pointer overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/10 rounded-lg pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 overflow-hidden rounded-lg">
                  <div className="relative">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    />
                    {index === 0 && (
                      <span className="absolute top-3 left-3 bg-orange-600 text-xs font-bold uppercase px-2 py-1 rounded shadow">
                        🔥 Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="bg-orange-500 text-black font-semibold px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white hover:text-orange-400 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-2 text-sm font-semibold text-orange-400 hover:text-white transition"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Cards Section */}
        <div className="lg:w-2/3 w-full">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
          >
            {currentBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx + 1}
              >
                <BlogCard {...blog} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          <motion.div
            className="flex justify-center items-center mt-10 space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-5 py-2 rounded cursor-pointer bg-orange-500 text-white font-semibold hover:bg-orange-600 transition ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              ← Previous
            </button>
            <span className="text-gray-300 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-5 py-2 rounded cursor-pointer bg-orange-500 text-white font-semibold hover:bg-orange-600 transition ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
