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
      className="logo-html"
      dangerouslySetInnerHTML={{ __html: logoHtml }}
      style={{ width: '300px', height: '100px' }}
      
     
    />
    
  );
};

export default Logo;
