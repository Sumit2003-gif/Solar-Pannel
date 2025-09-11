import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaEnvelope,
  FaSun,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Blog', path: '/blog', icon: <FaBlog /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black shadow-lg backdrop-blur-md border-b border-orange-500'
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" data-aos="fade-right">
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-sm" />
            ))}
          </div>
          <div className="text-orange-500 font-bold text-lg leading-tight animate-pulse">
            <span className="flex items-center gap-1">
              <FaSun className="text-yellow-400 animate-spin-slow" />
              GO SOLAR
            </span>
            <span className="text-sm text-gray-300 font-normal">Best For Environment</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6" data-aos="fade-down">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-1 font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hover:tracking-wide transition-all duration-200">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-black px-6 overflow-hidden ${
          menuOpen ? 'max-h-[300px] py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-2 text-lg transition-all duration-300 ${
                  isActive
                    ? 'text-orange-500 border-b border-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
