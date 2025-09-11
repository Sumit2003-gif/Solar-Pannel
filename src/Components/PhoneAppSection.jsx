import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const infoPoints = [
  { text: '1.1 kW\nProducing', color: 'text-orange-400', top: '28%', left: '50%' },
  { text: '0.8 kW\nExporting', color: 'text-gray-300', top: '52%', left: '18%' },
  { text: '0.2 kW\nConsuming', color: 'text-orange-400', top: '56%', left: '74%' },
  { text: '0.1 kW\nCharging', color: 'text-green-400', top: '78%', left: '38%' },
];

// Custom hook for typewriter effect
function useTypewriter(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}

const PhoneAppSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });
  }, []);

  // Use typewriter hook for the main heading
  const fullHeadingText = 'The power of the sun, at your fingertips';
  const typedHeading = useTypewriter(fullHeadingText, 60);

  const renderHeading = () => <>{typedHeading}</>;

  return (
    <>
      <section className="bg-black text-white py-28 px-6 sm:px-10 md:px-24 flex flex-col md:flex-row items-center justify-between gap-16">
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
          <div className="flex gap-6 flex-wrap" data-aos="fade-up" data-aos-delay="900">
            <Link to="/contact">
              <button className="px-8 cursor-pointer py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black rounded-full font-semibold shadow-xl hover:from-yellow-400 hover:to-orange-500 transition duration-300 transform hover:scale-105">
                Get Contact
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 border-2 cursor-pointer border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition duration-300 transform hover:scale-105"
            >
              Watch App Preview
            </button>
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 animate-fadeIn"
          style={{ animationDuration: '0.4s' }}
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-orange-500">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qbKCe4c7e2U?autoplay=1&rel=0&modestbranding=1"
              title="App Preview Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-6 -right-6 bg-orange-500 text-black w-12 h-12 rounded-full text-3xl font-bold shadow-lg hover:bg-orange-600 transition flex items-center justify-center"
              aria-label="Close"
            >
              ×
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
