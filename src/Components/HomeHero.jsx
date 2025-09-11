import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HomeHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white bg-black/50 overflow-hidden px-4">
      {/* Background for Mobile (Image Fallback) */}
      <div className="absolute inset-0 -z-20 block md:hidden bg-[url('https://images.pexels.com/photos/9799994/pexels-photo-9799994.jpeg')] bg-cover bg-center" />

      {/* Video Background for Desktop */}
      <div className="absolute inset-0 -z-20 hidden md:block overflow-hidden">
        <iframe
          src="https://fast.wistia.net/embed/iframe/xnvfbra3x3"
          title="Background Video"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full object-cover pointer-events-none"
          style={{ border: 'none' }}
        ></iframe>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 z-0" />

      {/* Foreground Content */}
      <motion.div
        className="relative z-20 text-center max-w-xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-6 leading-tight">
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
          className="text-base sm:text-lg md:text-xl mb-3 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Be your own source of power.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          With solar energy, you're not just saving on your energy bill — you're investing in a cleaner, more sustainable future. Experience the power of independence today.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
