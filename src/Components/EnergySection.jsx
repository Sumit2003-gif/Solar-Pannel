import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },  // start left and invisible
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Energy101Section = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center min-h-[500px] px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInFromLeft}
    >
      {/* Left Side - Image */}
      <div
        className="md:w-1/2 w-full h-[250px] sm:h-[350px] md:h-[600px] bg-cover bg-center  shadow-lg"
        style={{
          backgroundImage:
            "url('https://enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2022-03/enphase-homeowner-energy-101-min.jpeg?itok=C74W72_t')",
        }}
      ></div>

      {/* Right Side - Text Content */}
      <div
        className="md:w-1/2 w-full bg-gradient-to-r from-[#6B3B07] to-[#A66E2A] p-8 sm:p-12 flex flex-col justify-center text-white min-h-[250px] sm:min-h-[350px] md:min-h-[600px]  shadow-lg mt-6 md:mt-0"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 drop-shadow-md">
          Energy 101
        </h2>
        <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-lg drop-shadow-sm">
          Ever wonder what happens to solar power on a cloudy day or how solar saves money? You aren't alone. Our customers have questions, and we have answers.
        </p>
        <Link to="/about">
        <button className="bg-white cursor-pointer text-black font-semibold px-8 py-3 rounded-full w-max hover:bg-gray-200 transition shadow-md self-start">
          Learn more
        </button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Energy101Section;
