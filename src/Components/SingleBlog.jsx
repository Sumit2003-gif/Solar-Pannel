import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from './Blogdata';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const SingleBlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
        <div>
          <h2 className="text-3xl text-orange-500 mb-4">Blog Not Found</h2>
          <button
            onClick={() => navigate('/blog')}
            className="bg-orange-500 hover:bg-orange-600 text-black py-2 px-4 rounded"
          >
            Back to Blogs
          </button>
        </div>
      </section>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message received: ${message}`);
    setMessage('');
  };

  return (
    <section className="bg-black text-white font-sans">
      {/* Blog Container */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-10 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/blog')}
          className="mb-6 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-5 rounded-md transition shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Blogs
        </motion.button>

        {/* Banner Image */}
        <motion.div
          className="mb-10 rounded-lg overflow-hidden shadow-lg border border-gray-700"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-8 hover:text-orange-400 transition cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {blog.title}
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-gray-300 text-lg mb-10 leading-relaxed"
          variants={fadeIn}
          custom={1}
        >
          Solar power has emerged as a leading renewable energy source in the fight against climate change and rising energy costs. In this comprehensive guide, we explore the many facets of solar energy — from technology advancements to environmental benefits — helping you understand why solar power is shaping the future.
        </motion.p>

        {/* Row Content */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:gap-10 mb-10"
          variants={fadeIn}
          custom={2}
        >
          {/* Left Text */}
          <div className="md:w-1/2 text-gray-300 text-base leading-relaxed tracking-wide space-y-4">
            <p>
              Harnessing the power of the sun allows us to generate clean electricity without harmful emissions or reliance on finite fossil fuels. Modern solar panels have become increasingly efficient and affordable.
            </p>
            <p>
              Advances in photovoltaic technology have pushed conversion efficiencies to new heights. Innovative designs, including bifacial panels and solar tracking systems, capture more sunlight throughout the day.
            </p>
          </div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 rounded-lg overflow-hidden shadow-md border border-gray-700"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.pexels.com/photos/8853536/pexels-photo-8853536.jpeg"
              alt="Solar panel"
              className="w-full h-64 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Extended Text */}
        <motion.div
          className="text-gray-300 text-base leading-relaxed tracking-wide space-y-4 mb-12"
          variants={fadeIn}
          custom={3}
        >
          <p>
            Beyond the obvious financial benefits — lower electricity bills and protection against rising energy prices — solar power helps reduce our collective carbon footprint.
          </p>
          <p>
            Furthermore, solar energy systems require minimal maintenance and offer decades-long warranties. Paired with batteries, they give users more energy independence and resilience.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          className="relative pl-14 border-l-4 border-orange-500 italic text-orange-400 my-12 text-lg"
          variants={fadeIn}
          custom={4}
        >
          <FaQuoteLeft className="absolute left-4 top-1 text-4xl opacity-30" />
          “Switching to solar power isn’t just an upgrade to your home — it’s a commitment to a cleaner, more sustainable planet for generations to come.”
        </motion.blockquote>
      </motion.div>

      {/* Leave a Message */}
      <motion.section
        className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-700 py-16 px-6 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={5}
      >
        <div className="max-w-4xl mx-auto bg-black/80 rounded-lg p-8 md:p-10 shadow-xl border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-3">
            Leave a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <textarea
              className="resize-none bg-gray-900 text-white p-6 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow shadow-md"
              placeholder="Write your thoughts here..."
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-start bg-orange-600 hover:bg-orange-700 text-black font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.section>
    </section>
  );
};

export default SingleBlogPost;
