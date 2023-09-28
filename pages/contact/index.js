import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {

  const boxShadowStyle = {
    boxShadow: '2px 2px 10px rgb(205, 92, 92)', // Modificación para un sombreado más intenso
  };
  

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex space-x-10">
        <a
          href="#"
          className="w-24 h-24 rounded-full flex items-center justify-center text-[red] 
          text-2.5xl transition duration-450 hover:text-black hover:border-red-500 
          hover:bg-red-500"
          style={{
            WebkitBoxReflect:
              ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
            ...boxShadowStyle, // Aplicar el estilo de sombreado aquí
          }}
        >
          
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="#"
          className="w-24 h-24 rounded-full border-2 border-white bg-white flex items-center justify-center text-[blue] text-2.5xl transition duration-300 hover:text-black hover:border-black hover:bg-black"
          style={{
            WebkitBoxReflect:
              'below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
            ...boxShadowStyle, // Aplicar el estilo de sombreado aquí
          }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
