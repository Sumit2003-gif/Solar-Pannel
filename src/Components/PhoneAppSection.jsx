import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FiX, FiPlay, FiLoader } from 'react-icons/fi';

const infoPoints = [
  { text: '1.1 kW\nProducing', color: 'text-orange-400', top: '28%', left: '50%' },
  { text: '0.8 kW\nExporting', color: 'text-gray-300', top: '52%', left: '18%' },
  { text: '0.2 kW\nConsuming', color: 'text-orange-400', top: '56%', left: '74%' },
  { text: '0.1 kW\nCharging', color: 'text-green-400', top: '78%', left: '38%' },
];

// Custom hook for typewriter effect
function useTypewriter(text, speed = 100, restartTrigger) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [restartTrigger]);

  useEffect(() => {
    if (currentIndex >= text.length) return;
    
    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed]);

  return displayedText;
}

const PhoneAppSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [typewriterRestart, setTypewriterRestart] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });
    
    // Intersection Observer to restart typewriter when section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypewriterRestart(prev => prev + 1);
        }
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Use typewriter hook for the main heading
  const fullHeadingText = 'The power of the sun';
  const typedHeading = useTypewriter(fullHeadingText, 60, typewriterRestart);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isModalOpen) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
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
  }, [isModalOpen]);

  const renderHeading = () => <>{typedHeading}</>;

  return (
    <>
      <section 
        ref={sectionRef}
        className="bg-black text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16"
      >
        {/* LEFT - Image with overlay points */}
        <div
          className="relative w-full md:w-1/2 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative w-[280px] sm:w-[340px] md:w-[420px] aspect-[9/16] rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-600">
            <img
              src="https://embed-ssl.wistia.com/deliveries/293e04944e004389c3e7cb2fa02dbf06916d81fe.webp?image_crop_resized=960x781"
              alt="App preview"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          {/* Floating Info Points */}
          {infoPoints.map((point, idx) => (
            <div
              key={idx}
              className={`absolute whitespace-pre-line text-xs sm:text-sm font-semibold ${point.color} cursor-default select-none`}
              style={{
                top: point.top,
                left: point.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 30,
                filter: 'drop-shadow(0 0 4px rgba(255, 165, 0, 0.7))',
                userSelect: 'none',
              }}
              data-aos="fade"
              data-aos-delay={150 + idx * 150}
            >
              <div className="bg-black/80 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md border border-orange-600/70 animate-pulse select-none">
                {point.text}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - Text Content */}
        <div className="md:w-1/2 max-w-xl text-left space-y-6">
          <p
            className="uppercase text-sm tracking-[4px] text-orange-500 mb-5 font-semibold opacity-0 animate-fadeUp"
            style={{ animationFillMode: 'forwards', animationDuration: '0.7s', animationDelay: '0.3s' }}
          >
            Enphase App
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight text-white drop-shadow-[0_2px_8px_rgba(255,140,0,0.7)] min-h-[4rem] sm:min-h-[6rem]"
          >
            {renderHeading()}
            <span className="blinking-cursor">|</span>
          </h2>

          <p className="text-lg text-white/90 leading-relaxed" data-aos="fade-right" data-aos-delay="500">
            Control your Enphase system from virtually anywhere with the most powerful mobile app ever created for solar.
          </p>
          <p className="text-lg text-white/80 leading-relaxed" data-aos="fade-right" data-aos-delay="600">
            See where your power is flowing in real time and view reports of your energy use over periods of time. Choose the essential appliances that absolutely need to stay on during an outage—or let our software decide for you.
          </p>
          <p className="text-lg text-white/80 leading-relaxed" data-aos="fade-right" data-aos-delay="700">
            Stay prepared for outages with automatic weather monitoring and a full charge ahead of severe storms. In many communities, when you're not saving surplus electricity for your own use, you’ll be selling it back to your utility provider.
          </p>
          <p className="text-lg text-white/80 leading-relaxed" data-aos="fade-right" data-aos-delay="800">
            That’s a lot of power packed into one little app.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="900">
            <Link to="/contact" className="flex-1">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black rounded-full font-semibold shadow-xl hover:from-yellow-400 hover:to-orange-500 transition duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Contact
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex-1 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiPlay className="text-lg" />
              Watch App Preview
            </button>
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          style={{ animationDuration: '0.4s' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-orange-500"
            onClick={(e) => e.stopPropagation()}
          >
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <FiLoader className="text-orange-500 text-4xl animate-spin" />
              </div>
            )}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qbKCe4c7e2U?autoplay=1&rel=0&modestbranding=1"
              title="App Preview Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoad}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              aria-label="Close video"
            >
              <FiX className="text-xl" />
            </button>
          </div>
        </div>
      )}

      {/* Extra CSS for animations and cursor */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          .animate-fadeIn {
            animation-name: fadeIn;
            animation-fill-mode: forwards;
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeUp {
            animation-name: fadeUp;
            animation-fill-mode: forwards;
          }

          .blinking-cursor {
            font-weight: 900;
            color: orange;
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to {opacity: 1;}
            50% {opacity: 0;}
          }
        `}
      </style>
    </>
  );
};

export default PhoneAppSection;