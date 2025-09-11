import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HomeHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white bg-black/40">
      {/* Video Background (YouTube Fallback) */}
      <div className="absolute inset-0 -z-10">
        <iframe
          src="https://fast.wistia.net/embed/iframe/xnvfbra3x3"
          title="Background Video"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-screen  h-full object-contain pointer-events-none"
          style={{ border: 'none' }}
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Foreground Content */}
      <motion.div
        className="relative z-20 text-center px-6 sm:px-10 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Typing Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-orange-500">
          <TypeAnimation
            sequence={[
              'Join the Energy Revolution',
              2000,
              'Power Your Future with Solar',
              2000,
              'Take Control of Your Energy',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Be your own source of power.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          With solar energy, you're not just saving on your energy bill — you're investing
          in a cleaner, more sustainable future. Experience the power of independence today.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded shadow transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Get Contact
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HomeHero;
