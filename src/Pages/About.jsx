import React from 'react';
import { motion } from 'framer-motion';
import AboutValue from '../Components/AboutValue';
import About_Journey from '../Components/About_Journey';
import AboutTeam from '../Components/AboutTeam';

const fadeScaleVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.3, duration: 0.7, ease: 'easeOut' },
  }),
};

const headingPulseVariant = {
  initial: { letterSpacing: '0.05em', color: '#f97316' }, // orange-500
  animate: {
    letterSpacing: '0.15em',
    color: '#fb923c', // orange-400 lighter
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Top Heading */}
      <motion.div
        className="text-center py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeScaleVariant}
        custom={0}
      >
        <motion.h1
          className="text-5xl font-extrabold text-orange-500"
          initial="initial"
          animate="animate"
          variants={headingPulseVariant}
        >
          About Us
        </motion.h1>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="https://enphase.com/sites/default/files/styles/max_2600x2600/public/2021-08/About-us-hero-image_0.jpg?itok=hfWGMER5"
          alt="About Enphase"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <motion.div
          className="relative z-10 flex items-center justify-center h-full px-4"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-xl">
            Powering a Sustainable Future
          </h1>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScaleVariant}
          custom={0}
        >
          <motion.h2
            className="text-3xl font-semibold text-orange-500 mb-4"
            initial="initial"
            animate="animate"
            variants={headingPulseVariant}
          >
            Our Purpose
          </motion.h2>
          <motion.h3
            className="text-2xl font-semibold text-white mb-4"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Advancing a sustainable future for all
          </motion.h3>
          <motion.p
            className="text-gray-300 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Founded in 2006, Enphase transformed the solar industry with its revolutionary microinverter technology, which turns sunlight into a safe, reliable, resilient and scalable source of energy to power our lives. Today, our intelligent microinverters work with virtually every solar panel made, and when paired with our award-winning smart battery technology, they create one of the industry’s best-performing clean energy systems.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScaleVariant}
          custom={1}
        >
          <motion.p
            className="text-gray-300 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The Enphase Energy System helps people make, use, save and sell their own power. This includes our industry-leading app, which provides unprecedented data and control in the palm of your hand. For the first time in the evolution of our centuries-old grid, people can get paid for the clean energy they produce and share with their communities, and build a new energy future that harnesses the sun. This clean, free, abundant source of energy can power our lives and ultimately help replace fossil fuels altogether.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScaleVariant}
          custom={2}
        >
          <motion.p
            className="text-gray-300 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Today, if you see a home with solar panels on it, there’s a good chance it’s an Enphase home. Enphase has shipped approximately 83.1 million microinverters, and more than 4.9 million Enphase-based systems have been deployed in over 160 countries, helping millions of people gain access to clean, affordable, and reliable energy while creating good jobs and a more carbon-free future for everyone.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScaleVariant}
          custom={3}
        >
          <motion.h2
            className="text-2xl font-bold text-orange-500 mt-6 max-w-3xl"
            initial="initial"
            animate="animate"
            variants={headingPulseVariant}
          >
            Enphase. Power by people
          </motion.h2>
        </motion.div>
      </section>

      {/* Other sections with fade scale */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeScaleVariant}
        custom={4}
      >
        <AboutValue />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeScaleVariant}
        custom={5}
      >
        <About_Journey />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeScaleVariant}
        custom={6}
      >
        <AboutTeam />
      </motion.section>
    </div>
  );
};

export default About;
