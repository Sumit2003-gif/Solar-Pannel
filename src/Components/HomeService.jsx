import React from 'react';
import { FaSolarPanel, FaBolt, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    text: 'We specialize in expert installation of high-efficiency solar panels designed to meet your energy needs. Our team ensures proper setup, maximum sun exposure, and long-term reliability for both homes and businesses.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    icon: <FaSolarPanel size={40} className="text-orange-500" />,
  },
  {
    id: 2,
    title: 'Energy Storage Solutions',
    text: 'Harness the power of the sun even after sunset. Our advanced battery storage systems allow you to store excess solar energy during the day and use it whenever you need it—especially during peak hours or outages.',
    image: 'https://images.unsplash.com/photo-1579370318448-d9e0e986d3d8?auto=format&fit=crop&w=800&q=80',
    icon: <FaBolt size={40} className="text-yellow-400" />,
  },
  {
    id: 3,
    title: 'Maintenance & Repair',
    text: 'Keep your solar systems running at peak performance. Our technicians offer routine maintenance, troubleshooting, and fast repair services to ensure long-term efficiency and safety.',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80',
    icon: <FaTools size={40} className="text-green-500" />,
  },
];

// Animation variants for cards: fade in + slide up
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

// Animation for header
const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const ServiceCard = ({ image, icon, title, text, custom }) => {
  return (
    <motion.div
      className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-orange-500/30 hover:shadow-2xl transition duration-500 cursor-pointer group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={custom}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Image + Icon */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-125">
          {icon}
        </div>
      </div>

      {/* Text */}
      <div className="p-6 transition-all duration-300 group-hover:bg-zinc-800 rounded-b-xl">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

const OurServiceSection = () => {
  return (
    <section className="bg-black py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-lg text-gray-400">
            We provide a full range of solar energy services to power your home or business—efficiently, affordably, and sustainably.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} custom={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
