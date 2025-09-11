// HomeSwitch.jsx
import React, { useEffect } from 'react';
import { FaLeaf, FaShieldAlt, FaPiggyBank } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Sustainable &\nRenewable Energy',
    icon: <FaLeaf className="text-orange-400 text-5xl mb-4" />,
    content: `I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
    bgColor: 'bg-neutral-900',
    hoverImg: 'https://images.pexels.com/photos/1254997/pexels-photo-1254997.jpeg',
    buttonText: 'Learn More',
  },
  {
    title: 'Safe & Reliable.\nTake Control of Your\nPower Production',
    icon: <FaShieldAlt className="text-orange-400 text-5xl mb-4" />,
    content: `I'm a paragraph. Click here to add your own text and edit me.`,
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
    hoverImg: 'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg',
    buttonText: 'Discover More',
  },
  {
    title: 'Great Savings &\nReturn on Investment',
    icon: <FaPiggyBank className="text-orange-400 text-5xl mb-4" />,
    content: `I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
    bgColor: 'bg-neutral-900',
    hoverImg: 'https://images.pexels.com/photos/8853525/pexels-photo-8853525.jpeg',
    buttonText: 'Start Saving',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const HomeSwitch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
  }, []);

  return (
    <section className="py-16 px-6 bg-black text-center">
      {/* H1 Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Should You Switch?
      </motion.h1>

      {/* 3-Column Layout */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`relative flex-1 group p-10 overflow-hidden rounded-lg shadow-md cursor-pointer
              ${card.bgColor} ${card.textColor || 'text-white'}
              hover:shadow-2xl transition-shadow duration-500
            `}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ perspective: '1000px' }}
          >
            {/* Hover Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-700"
              style={{ backgroundImage: `url(${card.hoverImg})` }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {card.icon}
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold whitespace-pre-line mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.3 }}
                >
                  {card.content}
                </motion.p>
              </div>

              {/* Button */}
<Link
  to="/"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
>              <motion.button
                className={`mt-auto inline-block cursor-pointer px-6 py-3 rounded-md font-semibold transition
                bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 hover:shadow-lg
                `}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(249, 115, 22, 0.6)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {card.buttonText}
              </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSwitch;
