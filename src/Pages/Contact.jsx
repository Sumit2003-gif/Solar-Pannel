import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactCard = ({ icon, title, detail }) => (
  <div className="relative bg-black rounded-xl shadow-md flex items-center space-x-4 cursor-pointer overflow-hidden hover:shadow-orange-500 transition-shadow">
    <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
    <div className="relative flex items-center space-x-4 p-6 w-full z-10">
      <div className="text-orange-500 text-3xl">{icon}</div>
      <div>
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <p className="text-gray-400 text-sm">{detail}</p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Thanks for getting in touch! Your message has been saved locally.');
  };

  return (
    <section className="bg-black min-h-screen px-6 py-12 md:px-20 text-white">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-8 select-none">Get in Touch</h1>
      <p className="max-w-xl text-gray-400 mb-12">
        We’re here to help you harness the power of the sun! Whether you have questions about solar panel installations, pricing, or service, reach out to us below.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ContactCard
          icon={<FiMail />}
          title="Email Us"
          detail="info@solarenergy.com"
        />
        <ContactCard
          icon={<FiPhone />}
          title="Call Us"
          detail="+91 98765 43210"
        />
        <ContactCard
          icon={<FiMapPin />}
          title="Visit Us"
          detail="Hisar, Haryana, India"
        />
      </div>

      {/* Contact Form + Map */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <form
          className="relative flex-1 bg-black rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-orange-500 transition-shadow"
          onSubmit={handleSubmit}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

          {/* Content */}
          <div className="relative p-8 z-10">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Send Us a Message</h2>
            <label className="block mb-4">
              <span className="text-gray-300 mb-1 block">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-md px-4 py-2 bg-black bg-opacity-70 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition placeholder-gray-500"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-300 mb-1 block">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full rounded-md px-4 py-2 bg-black bg-opacity-70 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition placeholder-gray-500"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-300 mb-1 block">Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full rounded-md px-4 py-2 bg-black bg-opacity-70 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition resize-none placeholder-gray-500"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition-colors text-black font-semibold px-6 py-3 rounded-md mt-4"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Map */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg filter grayscale contrast-75">
          <iframe
            title="Hisar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.842944477134!2d75.72029761546079!3d29.149183732073966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911e4305f883d1d%3A0x5a682a5041e2b0e6!2sHisar%2C%20Haryana%201255001%2C%20India!5e0!3m2!1sen!2sus!4v1694463781742!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[350px] w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
