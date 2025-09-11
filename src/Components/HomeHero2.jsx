import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sections = [
  {
    image:
      'https://static.wixstatic.com/media/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg/v1/fill/w_1814,h_621,al_l,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg',
    text: `In a single hour, the sun generates enough energy to power the lives of every human on earth for an entire year. Imagine if all that power was in your hands.

The Enphase Energy System brings solar, batteries, and software together in one complete package so you can make, use, save, and sell your own power—all through a smart mobile app.

With an Enphase system, not only can you lower your utility bills and reduce your carbon footprint, but you can also keep your power flowing even when the weather takes an unexpected turn or the grid has a bad day.

This is the clean energy future we’ve been waiting for.`,
    reverse: false,
    flipImage: false,
  },
  {
    image:
      'https://static.wixstatic.com/media/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg/v1/fill/w_1814,h_621,al_l,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ec3f3132518d409f9b6a458252ebd997~mv2.jpg',
    text: `The sun offers more energy than we’ll ever need. With smart systems like Enphase, you're in control.

These systems are scalable, smart, and built to adapt to your energy needs—today and in the future.

Take charge of your power, your savings, and your future.`,
    reverse: true,
    flipImage: true,
  },
];

const HomeHero2 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Heading Section */}
      {/* Heading Section */}
<div className="py-12 px-4 md:px-16 bg-gradient-to-b from-black via-gray-900 to-black">
  <div className="max-w-5xl mx-auto text-left">
    <div className="border-l-4 border-orange-500 pl-6" data-aos="fade-right">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight whitespace-pre-line">
        <TypeAnimation
          sequence={[
            'It’s solar.\n',
            1000,
            'It’s solar.\nIt’s a system.\n',
            1000,
            'It’s solar.\nIt’s a system.\nAnd it revolves around you.',
          ]}
          speed={50}
          repeat={0}
          wrapper="span"
          style={{
            display: 'inline-block',
            whiteSpace: 'pre-line',
          }}
        />
      </h1>
    </div>
  </div>
</div>

      {/* Section Content */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`w-full flex flex-col md:flex-row ${
            section.reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 h-[300px] md:h-[500px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${section.image})`,
                transform: section.flipImage ? 'scaleX(-1)' : 'none',
                filter: 'brightness(0.5) contrast(1.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/40 to-black/80" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={`w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:py-0 ${
              section.reverse ? 'md:justify-start' : 'md:justify-end'
            }`}
            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="bg-black/80 p-8 rounded-lg border border-orange-500 ring-2 ring-orange-600 shadow-xl max-w-xl">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default HomeHero2;
