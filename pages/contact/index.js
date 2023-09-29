import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
  // Check if the screen width is less than a certain breakpoint (e.g., 768px)
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <a
        href="#"
        className={`w-36 h-36 rounded-full flex items-center justify-center text-[#0066c8] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#0066c8] mb-4 md:mb-0`}
        style={{
          WebkitBoxReflect: isMobile
            ? 'none' // Disable WebkitBoxReflect on mobile screens
            : ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
          boxShadow: '3px 3px 10px rgba(0, 102, 200, 1.0)',
          borderRadius: '50%',
          borderColor: '#0066c8',
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
      <a
        href="#"
        className={`w-36 h-36 rounded-full flex items-center justify-center text-[#36bb22] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#36bb22] mb-4 md:mb-0`}
        style={{
          WebkitBoxReflect: isMobile
            ? 'none' // Disable WebkitBoxReflect on mobile screens
            : ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
          boxShadow: '3px 3px 10px rgba(54, 187, 34, 1.0)',
          borderRadius: '50%',
          borderColor: '#0066c8',
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="4x" />
      </a>
      <a
        href="#"
        className={`w-36 h-36 rounded-full flex items-center justify-center text-[#000] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#FFFF] mb-4 md:mb-0`}
        style={{
          WebkitBoxReflect: isMobile
            ? 'none' // Disable WebkitBoxReflect on mobile screens
            : ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
          boxShadow: '3px 3px 10px rgba(255, 255, 255, 1.0)',
          borderRadius: '50%',
          borderColor: '#0066c8',
        }}
      >
        <FontAwesomeIcon icon={faGithub} size="4x" />
      </a>
      <a
        href="#"
        className={`w-36 h-36 rounded-full flex items-center justify-center text-[#c03929] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#c03929] relative`}
        style={{
          WebkitBoxReflect: isMobile
            ? 'none' // Disable WebkitBoxReflect on mobile screens
            : ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
          boxShadow: '3px 3px 10px rgba(192, 57, 41, 1.0)',
          borderRadius: '50%',
        }}
      >
        <FontAwesomeIcon icon={faSquareEnvelope} size="4x" />
        <span className="absolute z-[-10] top-14 left-12 right-0 bottom-0 flex items-center justify-center bg-white w-11 h-8"></span>
      </a>
    </div>
  );
};

export default SocialIcons;
