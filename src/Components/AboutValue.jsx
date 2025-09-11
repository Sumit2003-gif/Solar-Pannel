import React from 'react';
import {
  FaUserFriends,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
  FaUsers,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutValue = () => {
  const CardsData = [
    {
      header: 'Customer First',
      data: [
        'We exist for our customers.',
        'We listen to our customers and measure our success based on their feedback.',
        'We take action to deliver the best customer experience.',
      ],
    },
    {
      header: 'Integrity',
      data: [
        'We tell the truth at all times, without making excuses.',
        'We do what’s best for the company.',
        'We take ownership of our behaviours and results.',
      ],
    },
    {
      header: 'Innovation',
      data: [
        'We value innovation and recognise that it is the cornerstone of our existence.',
        'We encourage risk-taking and challenge the status quo to find solutions.',
        'We actively promote innovation through curiosity and continuous learning.',
      ],
    },
    {
      header: 'Teamwork',
      data: [
        'We appreciate and respect different behavioural styles and perspectives.',
        'We collaborate globally to achieve more together than we can on our own.',
        'We actively work to break down silos.',
      ],
    },
    {
      header: 'Quality',
      data: [
        'We place safety and quality above everything else.',
        'We measure everything that matters and drive continuous improvement.',
        'We make the highest-quality products.',
      ],
    },
  ];

  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'customer first':
        return <FaUsers />;
      case 'integrity':
        return <FaHandshake />;
      case 'innovation':
        return <FaLightbulb />;
      case 'teamwork':
        return <FaUserFriends />;
      case 'quality':
        return <FaCheckCircle />;
      default:
        return <FaLightbulb />;
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Section Heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
        custom={0}
      >
        <motion.p
          className="text-orange-500 font-semibold uppercase tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Values
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mt-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          What We Believe In
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our company values are highlighted in how we work together, how we perform, and how we all get rewarded.
        </motion.p>
      </motion.div>

      {/* Values Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {CardsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-8 shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            custom={index + 1}
          >
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-5">
              <motion.div
                className="text-4xl text-orange-500"
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
              >
                {getIcon(item.header)}
              </motion.div>
              <motion.h2
                className="text-xl font-bold text-orange-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {item.header}
              </motion.h2>
            </div>

            {/* List of Values */}
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2 ml-4">
              {item.data.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutValue;
