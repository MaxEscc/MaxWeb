import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
  // Estilos para el hover
  const boxShadowStyle1 = {
    boxShadow: '3px 3px 10px rgba(0, 102, 200, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%',
  };

  const faWhatsappss = {
    boxShadow: '3px 3px 10px rgba(54, 187, 34, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%',
  };

  const famail = {
    boxShadow: '3px 3px 10px rgba(255, 255, 255, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%',
  };

  const gmailvox = {
    boxShadow: '3px 3px 10px rgba(192, 57, 41, 1.0)',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '50%',
  };

  // Estilos para WebkitBoxReflect
  const webkitBoxReflectStyle = {
    WebkitBoxReflect: 'below 5px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',
  };

  // Función para determinar si se debe aplicar WebkitBoxReflect
  const shouldApplyWebkitBoxReflect = () => {
    if (typeof window !== 'undefined') {
      const maxWidthForWebkitBoxReflect = 768; // Aplicar solo en resoluciones mayores a 768px (resoluciones de PC)
      return window.innerWidth > maxWidthForWebkitBoxReflect;
    }
    return false; // En el entorno de Node.js (generación de páginas), devuelve false por defecto
  };

  // Estado para manejar si se debe aplicar WebkitBoxReflect
  const [applyWebkitBoxReflect, setApplyWebkitBoxReflect] = useState(false);

  // Utiliza useEffect para actualizar el estado al cargar la página
  useEffect(() => {
    setApplyWebkitBoxReflect(shouldApplyWebkitBoxReflect());
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap justify-center md:space-x-10 md:space-y-0 space-y-0">
        <a
          href="#"
          className={`w-36 h-36 rounded-full flex items-center justify-center text-[#0066c8] text-2.5xl transition duration-450 hover:text-black hover:bg-[#0066c8] ${applyWebkitBoxReflect ? 'with-webkit-box-reflect' : ''}`}
          style={{
            borderColor: '#0066c8',
            ...(applyWebkitBoxReflect ? webkitBoxReflectStyle : {}),
            ...boxShadowStyle1,
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <a
          href="#"
          className={`w-36 h-36 rounded-full flex items-center justify-center text-[#36bb22] text-2.5xl transition duration-450 hover:text-black hover:bg-[#36bb22] ${applyWebkitBoxReflect ? 'with-webkit-box-reflect' : ''}`}
          style={{
            borderColor: '#0066c8',
            ...(applyWebkitBoxReflect ? webkitBoxReflectStyle : {}),
            ...faWhatsappss,
          }}
        >
          <FontAwesomeIcon icon={faWhatsapp} size="4x" />
        </a>
        <a
          href="#"
          className={`w-36 h-36 rounded-full flex items-center justify-center text-[#000] text-2.5xl transition duration-450 hover:text-black hover:bg-[#FFFF] ${applyWebkitBoxReflect ? 'with-webkit-box-reflect' : ''}`}
          style={{
            borderColor: '#0066c8',
            ...(applyWebkitBoxReflect ? webkitBoxReflectStyle : {}),
            ...famail,
          }}
        >
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
        <a
          href="#"
          className={`w-36 h-36 rounded-full flex items-center justify-center text-[#c03929] text-2.5xl transition duration-450 hover:text-black hover:bg-[#c03929] relative ${applyWebkitBoxReflect ? 'with-webkit-box-reflect' : ''}`}
          style={{
            ...(applyWebkitBoxReflect ? webkitBoxReflectStyle : {}),
            ...gmailvox,
          }}
        >
          <FontAwesomeIcon icon={faSquareEnvelope} size="4x" />
          <span className="absolute z-[-10] top-14 left-12 right-0 bottom-0 flex items-center justify-center bg-white w-11 h-8"></span>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
