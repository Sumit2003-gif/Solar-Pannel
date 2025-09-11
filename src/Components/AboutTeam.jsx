import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Amit Sharma',
    role: 'Solar Installation Expert',
    experience: '10+ years',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Priya Patel',
    role: 'Battery System Engineer',
    experience: '8 years',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Rahul Verma',
    role: 'Maintenance Lead',
    experience: '7 years',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sneha Kapoor',
    role: 'System Safety Specialist',
    experience: '5 years',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

const AboutTeam = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">
          Our <span className="text-orange-500">Experts</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Meet the professionals behind our success. Our team is driven by passion, precision, and a commitment to building a sustainable future.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-lg overflow-hidden group cursor-pointer relative flex flex-col items-center p-6"
          >
            {/* Photo */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-6 rounded-full">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 text-xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">Experience: {member.experience}</p>
              <p className="text-gray-700 text-sm">
                Passionate about creating sustainable energy solutions that make a difference.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
