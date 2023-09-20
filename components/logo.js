import React, { useEffect, useState } from 'react';

const Logo = () => {
  const [logoHtml, setLogoHtml] = useState('');

  useEffect(() => {
    // Realiza una solicitud para cargar el archivo HTML
    fetch('/logo.html')
      .then((response) => response.text())
      .then((data) => {
        setLogoHtml(data);
      })
      .catch((error) => {
        console.error('Error al cargar el archivo HTML', error);
      });
  }, []);

  return (
     <div
      className="logo-html gap-10"
      dangerouslySetInnerHTML={{ __html: logoHtml }}
      style={{ width: '400px', height: '200px' }}
      
     
    />
    
  );
};

export default Logo;
