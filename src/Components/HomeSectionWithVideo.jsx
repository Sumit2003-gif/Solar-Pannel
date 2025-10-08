import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPlay, FiX } from "react-icons/fi";

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isVideoOpen) {
      setIsVideoOpen(false);
    }
  };

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <>
      <section className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-32 flex flex-col md:flex-row items-center gap-10 md:gap-12 min-h-[500px]">
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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6 sm:mb-8 drop-shadow-lg"
            variants={fadeUp}
            custom={1.1}
          >
            IQ Microinverter System, Now Even{" "}
            <span className="text-orange-500">Brainier</span>
          </motion.h2>

          <motion.p
            className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
            variants={fadeUp}
            custom={1.2}
          >
            Our pioneering{" "}
            <span className="font-semibold text-orange-500">IQ Microinverter</span>{" "}
            performs a seemingly impossible feat with brilliant simplicity.
          </motion.p>

          <motion.p
            className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
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
            className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-gray-300"
            variants={fadeUp}
            custom={1.4}
          >
            That's in stark contrast to traditional string inverter systems, where
            if one panel goes down, the whole system can go down with it.
          </motion.p>

          <motion.p
            className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-300"
            variants={fadeUp}
            custom={1.5}
          >
            Enphase IQ Microinverters are compatible with virtually all solar panel
            makes and models, so choose the panels you like best knowing our
            microinverters will work with them seamlessly.
          </motion.p>

          <MotionLink
            to="/about"
            className="inline-block mt-4 sm:mt-6 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black rounded-full font-semibold shadow-lg hover:from-yellow-400 hover:to-orange-500 transition duration-300"
            variants={fadeUp}
            custom={1.6}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </MotionLink>
        </motion.div>

        {/* Right side: Video Background with overlay */}
        <motion.div
          className="md:w-1/2 relative rounded-3xl shadow-lg overflow-hidden max-w-full w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px] transform transition-transform duration-700 hover:scale-[1.02] cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/qbKCe4c7e2U?autoplay=0&mute=1&loop=1&playlist=qbKCe4c7e2U&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Enphase IQ Microinverter System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoad}
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-black/80"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.9)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay className="text-white text-xl sm:text-2xl ml-1" />
            </motion.div>
          </div>
          
          {/* Video Caption */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm p-2 rounded-lg">
            Click to watch how our IQ Microinverter System works
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-orange-500"
            onClick={(e) => e.stopPropagation()}
          >
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="w-16 h-16 border-t-4 border-orange-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qbKCe4c7e2U?autoplay=1&rel=0&modestbranding=1"
              title="Enphase IQ Microinverter System Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoad}
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              aria-label="Close video"
            >
              <FiX className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeSectionWithVideo;