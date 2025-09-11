import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    year: '2016',
    text: 'Founded by Raghu Belur and Martin Fornage in California',
    image:
      'https://enphase.com/sites/default/files/styles/max_650x650/public/2021-08/founded_2006_timeline.jpg?itok=5R2uNoOL',
  },
  {
    year: '2018',
    text: 'First microinverter-based solar system introduced',
    image:
      'https://enphase.com/sites/default/files/styles/max_650x650/public/2021-08/first-system_2008_timeline.jpg?itok=Y1H1f7Fh',
  },
  {
    year: '2020',
    text: '1 million microinverters shipped since inception',
    image:
      'https://enphase.com/sites/default/files/styles/max_650x650/public/2021-08/1-million_2011_timeline.jpg?itok=QVB9-AH6',
  },
  {
    year: '2022',
    text: 'Public listing on NASDAQ and expanded global presence',
    image:
      'https://enphase.com/sites/default/files/styles/max_650x650/public/2021-08/nasdaq_2012_timeline.jpg?itok=82gYjxpc',
  },
  {
    year: '2024',
    text: 'Over 1 million systems deployed globally',
    image:
      'https://enphase.com/sites/default/files/styles/max_650x650/public/2021-08/1-million-system_2019_timeline.jpg?itok=rLlvOPAC',
  },
  {
    year: 'Now',
    text: 'More than 4 million Enphase-based systems deployed worldwide',
    image:
      'https://enphase.com/sites/default/files/styles/max_3840x3840/public/2024-03/Approximately%20four%20million%20Enphase-based%20systems%20deployed.png?itok=ZXhphvO2',
  },
];

// Animation variants
const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const About_Journey = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariant}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-orange-500">Journey</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          See how we became the world’s leading provider of microinverter-based solar, home batteries, and energy management systems.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/10 z-0 hidden md:block" />

        <div className="space-y-20 relative z-10">
          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeVariant}
                custom={index}
              >
                {/* Image */}
                <motion.div
                  className="md:w-1/2 w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </motion.div>

                {/* Text Box */}
                <motion.div
                  className="md:w-1/2 w-full"
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                >
                  <div className="bg-white text-black p-6 rounded-2xl shadow-md w-full relative z-10">
                    <span className="inline-block mb-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {item.year}
                    </span>
                    <p className="text-lg font-medium">{item.text}</p>
                  </div>
                </motion.div>

                {/* Dot on Line */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About_Journey;
