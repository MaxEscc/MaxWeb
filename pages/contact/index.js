import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {

  //LINKE
  const boxShadowStyle1 = {
    boxShadow: '3px 3px 10px rgba(0, 102, 200, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%', // Hacer que la box shadow sea redonda

  };

  //WHATS
  const faWhatsappss = {
    boxShadow: '3px 3px 10px rgba(54, 187, 34, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%', // Hacer que la box shadow sea redonda
  };


  //GIT
  const famail = {
    boxShadow: '3px 3px 10px rgba(255, 255, 255, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%', // Hacer que la box shadow sea redonda
  };

  //gmail
  const gmailvox = {
    boxShadow: '3px 3px 10px rgba(192, 57, 41, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%', // Hacer que la box shadow sea redonda
  };


  const faWhatsappsssss = {
    boxShadow: '3px 3px 10px rgba(54, 187, 34, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%', // Hacer que la box shadow sea redonda
  };





  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex space-x-10">
        <a
          href="#"
          className="w-36 h-36 rounded-full flex items-center justify-center text-[#0066c8] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#0066c8]"
          style={{
            WebkitBoxReflect:
              ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
            ...boxShadowStyle1, // Aplicar el estilo de sombreado aquí
            borderColor: '#0066c8',
          }}
        >

          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <a
          href="#"
          className="w-36 h-36 rounded-full flex items-center justify-center text-[#36bb22] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#36bb22]"
          style={{
            WebkitBoxReflect:
              ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
            ...faWhatsappss, // Aplicar el estilo de sombreado aquí
            borderColor: '#0066c8',
          }}
        >

          <FontAwesomeIcon icon={faWhatsapp} size="4x" />
        </a>

        <a
          href="#"
          className="w-36 h-36 rounded-full flex items-center justify-center text-[#000] 
          text-2.5xl transition duration-450 hover:text-black 
          hover:bg-[#FFFF]"
          style={{
            WebkitBoxReflect:
              ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
            ...famail, // Aplicar el estilo de sombreado aquí
            borderColor: '#0066c8',
          }}
        >

          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>

        <a
          href="#"
          className="w-36 h-36 rounded-full flex items-center justify-center text-[#c03929] 
  text-2.5xl transition duration-450 hover:text-black 
  hover:bg-[#c03929] relative" // Agregamos 'relative' para establecer un contexto de posición relativa
          style={{
            WebkitBoxReflect:
              ' below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
            ...gmailvox, // Aplicar el estilo de sombreado aquí
          }}
        >

          <FontAwesomeIcon icon={faSquareEnvelope} size="4x" />
          <span className=" absolute z-[-10] top-14 left-12 right-0 bottom-0 flex items-center justify-center bg-white w-11 h-8">
          </span>
        </a>

      </div>
    </div>
  );
};

export default SocialIcons;
