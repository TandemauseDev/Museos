import React from 'react';
import image1 from '../img/CEREBRO.png';
import image2 from '../img/pierna.jpg';
import image3 from '../img/pulmones.jpg';
import image4 from '../img/CRANEO.jpg';
import image5 from '../img/bloque diafragmatico.jpg';

const Galeria = () => {
  const slides = [
    {
      url: image1,
      text: "Texto para la imagen 1"
    },
    {
      url: image2,
      text: "Texto para la imagen 2"
    },
    {
      url: image3,
      text: "Texto para la imagen 3"
    },
    {
      url: image4,
      text: "Texto para la imagen 4"
    },
    {
      url: image5,
      text: "Texto para la imagen 5"
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 justify-center">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="text-center flex flex-col items-center">
              <img src={slide.url} alt={`slide-${slideIndex}`} className="mx-auto w-96 h-96 object-contain rounded" />
              <p className="mt-2">{slide.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8"></div>
      <div className="text-center">
        <p>nico esta muy lindo </p>
      </div>
    </div>
  );
};

export default Galeria;
