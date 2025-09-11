import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.7, ease: 'easeOut' },
  }),
};

const HomeMain = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 md:px-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Meet the <span className="text-orange-500">Heroes</span> of Our Story
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Trained and certified professionals powering the Enphase revolution across the globe.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="flex justify-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={1}
      >
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2021-10/Meet-the-heros.jpg?itok=pZT7nbOj"
            alt="Meet the heroes"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="rounded-xl overflow-hidden shadow-md w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-full">
            <img
              src="https://enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2021-09/Installer-shot.jpg?itok=qvcvlPKD"
              alt="Installer working"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
        >
          <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
            The best solar installers in the business are trained and certified to work with Enphase products.
            Together, they’ve installed more than <span className="text-orange-500 font-semibold">4.9 million</span> Enphase-based systems
            in over 160 countries—and they’re ready for the next 10 million.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
            They can design and install a system that’s right for your home, down to your exact specifications.
            And because they live where you live, ask them about incentives or credits that may be available in your area.
          </p>

          {/* Button */}
          <MotionLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 inline-block px-8 py-3 bg-orange-500 text-black font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
          >
            Get Enphase
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeMain;
