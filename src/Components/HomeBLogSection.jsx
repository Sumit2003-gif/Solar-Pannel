import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Why Solar Energy Is the Future',
    date: 'September 5, 2025',
    description:
      'Discover how solar power is transforming homes and reducing energy bills across the globe.',
    image:
      'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
  },
  {
    id: 2,
    title: '5 Benefits of Battery Storage',
    date: 'August 22, 2025',
    description:
      'Store the sun. Learn how energy storage lets you power your home even when the sun goes down.',
    image:
      'https://images.pexels.com/photos/1254997/pexels-photo-1254997.jpeg',
  },
  {
    id: 3,
    title: 'How to Prepare for Energy Outages',
    date: 'July 30, 2025',
    description:
      'Outages don’t have to stop your life. Here’s how to stay powered with solar + backup solutions.',
    image:
      'https://images.pexels.com/photos/6572421/pexels-photo-6572421.jpeg',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.7, ease: 'easeOut' },
  }),
};

// BlogCard Component
const BlogCard = ({ id, title, date, description, image, custom }) => {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 group cursor-pointer min-h-[520px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariant}
      custom={custom}
      style={{
        background:
          'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(0,0,0,0.15) 100%)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between flex-grow p-6 bg-white bg-opacity-90 group-hover:bg-opacity-100 transition-colors duration-300">
        <div>
          <p className="text-sm text-gray-600 group-hover:text-gray-800 mb-1">{date}</p>
          <h3 className="text-2xl font-bold text-black group-hover:text-orange-500 transition-colors duration-300 mb-3">
            {title}
          </h3>
          <p className="text-gray-700 group-hover:text-gray-900 mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Read More Button */}
        <Link
          to={`/blog/${id}`}
          className="text-orange-500 font-semibold hover:underline transition duration-200 mt-auto"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

// Main Section Component
const HomeBlogSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0}
        >
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Latest <span className="text-orange-500">Blogs</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Stay informed with the latest news, tips, and insights from the solar energy world.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} {...blog} custom={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
