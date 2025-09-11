import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const BlogCard = ({ id, image, title, description, category, date }) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-black rounded-xl shadow-md flex flex-col overflow-hidden cursor-pointer transition-shadow hover:shadow-orange-500/30"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none rounded-xl"></div>

      {/* Content wrapper */}
      <div className="relative flex flex-col flex-grow">
        {/* Image */}
        <motion.div
          className="overflow-hidden rounded-t-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500"
          />
        </motion.div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow z-10">
          {/* Category tag */}
          <motion.span
            className="inline-block bg-orange-500 text-black font-semibold px-3 py-1 rounded-full text-xs mb-3 uppercase tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {category}
          </motion.span>

          {/* Title */}
          <motion.h2
            className="text-lg md:text-xl font-bold text-white mb-2 leading-tight hover:text-orange-400 transition-colors duration-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-sm flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {description.length > 100
              ? description.slice(0, 100) + '...'
              : description}
          </motion.p>

          {/* Footer with date and button */}
          <motion.div
            className="mt-5 flex justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-gray-500 text-xs">{date}</p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={`/blog/${id}`}
                className="text-sm bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors duration-300"
              >
                Read More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
