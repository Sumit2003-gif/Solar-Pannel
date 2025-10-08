import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300">
      {/* White transparent overlay */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-orange-500 rounded-sm"
                />
              ))}
            </div>
            <div className="text-orange-500 font-bold text-lg flex flex-col leading-tight">
              <motion.span
                className="flex items-center gap-1"
                initial={{ letterSpacing: '0.05em', color: '#f97316' }}
                animate={{ letterSpacing: '0.15em', color: '#fb923c' }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2,
                }}
              >
                <FaSun className="text-yellow-400" />
                GO SOLAR
              </motion.span>
              <span className="text-sm text-gray-300">Best For Environment</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Powering your home with the sun—intelligently and sustainably. Explore solar solutions designed for the future.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={1}
        >
          <h3 className="text-xl font-semibold text-white mb-4 motion-safe:animate-fadeInUp">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Blog', 'Contact'].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase().replace(/\s/g, '')}`}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info / Social */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={2}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@enphase.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Solar Street, California, USA</li>
          </ul>

          <div className="mt-4 flex gap-4 text-lg">
            {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-orange-500 transition-colors duration-300"
                aria-label={`Follow us on ${Icon.displayName || 'social media'}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={3}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-full placeholder:text-amber-50 border-amber-50 border text-amber-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <button
              type="submit"
              className="bg-orange-500 cursor-pointer text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative z-10 border-t border-white/10 text-center text-sm py-6 text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Enphase Solar. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
