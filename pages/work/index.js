import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkSlider = () => {
  // Datos de las diapositivas
  const workSlides = {
    slides: [
      {
        images: [
          {
            title: "Proyecto 1",
            description: "Descripción del Proyecto 1",
            path: "/thumb1.jpg",
          },
          {
            title: "Proyecto 2",
            description: "Descripción del Proyecto 2",
            path: "/thumb2.jpg",
          },
          {
            title: 'title',
            path: '/thumb3.jpg',
          },
          {
            title: 'title',
            path: '/thumb4.jpg',
          },
          
          // ... (otras imágenes de la diapositiva 1)
        ],
      },
      {
        images: [
          {
            title: "Proyecto 44",
    description: "Descripción del Proyecto 5",
    path: "/thumb4.jpg",
    width: "500px", // Cambiar el ancho según tus preferencias
    height: "300px"
       
          },
         
          // ... (otras imágenes de la diapositiva 2)
        ],
      },
      // ... (puedes agregar más diapositivas aquí)
    ],
  };

  // Configuración del carrusel de imágenes
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1, // Muestra solo un elemento a la vez
    slidesToScroll: 1,
    arrows: false, // Elimina las flechas de navegación
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Slider {...sliderSettings}>
          {workSlides.slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center">
                {/* Columna izquierda con título y descripción */}
                <div className="md:w-4/5 text-center md:text-left mb-8 md:mb-0"> {/* Cambio de clase para aumentar el tamaño */}
                  {/* Título y descripción del proyecto basado en la imagen actual */}
                  <h3 className="text-3xl font-semibold mb-2">
                    {slide.images[0].title}
                  </h3>
                  <p className="text-gray-600">{slide.images[0].description}</p>
                </div>

                {/* Columna derecha con las imágenes */}
                <div className="">
                  <div className="flex flex-wrap">
                    {slide.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="w-1/2 p-2">
                        <img
                          src={image.path}
                          alt={image.title}
                          className=" rounded-lg" // Cambios: agrandar imágenes y redondear bordes
                        />
                      </div>
                    ))}
                  </div>
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
