import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsBtn = () => {
  const rotatingImageSrc = "/rounded-text.png"; // Ruta de la imagen giratoria
  const staticImages = [
    { src: "/Image1.png", width: 200, height: 200 },
    { src: "/Image2.png", width: 250, height: 150 },
    { src: "/Image3.png", width: 300, height: 250 },
  ];
  const [currentStaticImageIndex, setCurrentStaticImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStaticImageIndex((prevIndex) =>
          prevIndex === staticImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [staticImages.length]); // Agrega staticImages.length al arreglo de dependencias
  

  const containerTransform = isHovered ? "scale(1.1)" : "scale(1.0)";

  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className={`relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group`}
        style={{
          transform: containerTransform, // Aplica la transformación al contenedor
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={rotatingImageSrc}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] absolute"
        />
        <Image
          src={staticImages[currentStaticImageIndex].src}
          width={staticImages[currentStaticImageIndex].width}
          height={staticImages[currentStaticImageIndex].height}
          alt=""
          style={{
            transition: "opacity 0.5s ease",
            opacity: isTransitioning ? 0 : 1,
          }}
          className="w-full h-full max-w-[85px] max-h-[85px]"
        />
      </Link>
      <style jsx>{`
        .hovered {
          transform: scale(1.1); // Escala al 110% al pasar el mouse
        }
      `}</style>
    </div>
  );
};

export default ProjectsBtn;
