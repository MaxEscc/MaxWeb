import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Proyecto 1",
          description: "Descripción del Proyecto 1",
          path: "/thumb1.jpg", // Asegúrate de que las rutas sean correctas
        },
        {
          title: "Proyecto 2",
          description: "Descripción del Proyecto 2",
          path: "/thumb2.jpg", // Asegúrate de que las rutas sean correctas
        },
        {
          title: "Proyecto 3",
          description: "Descripción del Proyecto 3",
          path: "/thumb3.jpg", // Asegúrate de que las rutas sean correctas
        },
        {
          title: "Proyecto 4",
          description: "Descripción del Proyecto 4",
          path: "/thumb4.jpg", // Asegúrate de que las rutas sean correctas
        },
      ],
    },
    {
      images: [
        {
          title: "Proyecto 5",
          description: "Descripción del Proyecto 5",
          path: "/thumb4.jpg", // Asegúrate de que las rutas sean correctas
        },
        {
          title: "Proyecto 6",
          description: "Descripción del Proyecto 6",
          path: "/thumb1.jpg", // Asegúrate de que las rutas sean correctas
        },
        {
          title: "Proyecto 7",
          description: "Descripción del Proyecto 7",
          path: "/thumb2.jpg", // Asegúrate de que las rutas sean correctas
        },
        {
          title: "Proyecto 8",
          description: "Descripción del Proyecto 8",
          path: "/thumb3.jpg", // Asegúrate de que las rutas sean correctas
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Slider {...sliderSettings}>
          {workSlides.slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-4/5 text-center md:text-left mb-8 md:mb-0">
                  <h3 className="text-3xl font-semibold mb-2 flex justify-center items-center">
                    {slide.images[0].title}
                  </h3>
                  <p className="text-gray-600 flex justify-center items-center">
                    {slide.images[0].description}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {slide.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="w-1/2 p-2 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                      <Image
                        src={image.path}
                        alt={image.title}
                        className="rounded-lg filter grayscale hover:filter-none"
                        style={{ maxWidth: "100%", maxHeight: "300px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkSlider;
