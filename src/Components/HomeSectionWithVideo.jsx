import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HomeSectionWithVideo = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 md:px-32 flex flex-col md:flex-row items-center gap-10 md:gap-12 min-h-[500px]">
      {/* Left side: Text */}
      <motion.div
        className="md:w-1/2 max-w-xl text-left z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeUp}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-8 drop-shadow-lg"
          variants={fadeUp}
          custom={1.1}
        >
          IQ Microinverter System, Now Even{" "}
          <span className="text-orange-500">Brainier</span>
        </motion.h2>

        <motion.p
          className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
          variants={fadeUp}
          custom={1.2}
        >
          Our pioneering{" "}
          <span className="font-semibold text-orange-500">IQ Microinverter</span>{" "}
          performs a seemingly impossible feat with brilliant simplicity.
        </motion.p>

        <motion.p
          className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
          variants={fadeUp}
          custom={1.3}
        >
          It transforms photons, quantum particles of light, into safe AC power
          you can use to power your home. With an Enphase Energy System, every
          solar panel is equipped with its own microinverter, so if one panel
          slips into the shade or experiences a rare glitch, the other panels
          keep generating power.
        </motion.p>

        <motion.p
          className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
          variants={fadeUp}
          custom={1.4}
        >
          That's in stark contrast to traditional string inverter systems, where
          if one panel goes down, the whole system can go down with it.
        </motion.p>

        <motion.p
          className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
          variants={fadeUp}
          custom={1.5}
        >
          Enphase IQ Microinverters are compatible with virtually all solar panel
          makes and models, so choose the panels you like best knowing our
          microinverters will work with them seamlessly.
        </motion.p>
       <MotionLink
  to="/about"
  className="inline-block mt-6 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black rounded-full font-semibold shadow-lg hover:from-yellow-400 hover:to-orange-500 transition duration-300"
  variants={fadeUp}
  custom={1.6}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Learn More
</MotionLink>
      </motion.div>


      {/* Right side: Background Image with overlay */}
      <motion.div
        className="md:w-1/2 relative rounded-3xl shadow-lg overflow-hidden max-w-full w-full h-[280px] sm:h-[380px] md:h-[600px] transform transition-transform duration-700 hover:scale-105"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://enphase.com/sites/default/files/styles/max_size_2800xauto_/public/2023-02/Enphase_App_noflow_EN_US-AU_new.jpg?itok=OGK_7IV4')",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-black/80"></div>
      </motion.div>
    </section>
  );
};

export default HomeSectionWithVideo;
