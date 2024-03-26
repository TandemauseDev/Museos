import React from 'react';
import image1 from '../img/CEREBRO.png';
import image2 from '../img/pierna.jpg';
import image3 from '../img/pulmones.jpg';
import image4 from '../img/CRANEO.jpg';
import image5 from '../img/BLOQUE DIAFRAGMATICO.jpg';

const Galeria = () => {
  const slides = [
    {
      url: image1,
      text: "SISTEMA NERVIOSO CENTRAL"
    },
    {
      url: image2,
      text: "EXTREMIDAD INFERIOR "
    },
    {
      url: image3,
      text: "SISTEMA RESPIRATORIO"
    },
    {
      url: image4,
      text: "CRANEO"
    },
    {
      url: image5,
      text: "BLOQUE DIAFRAGMATICO"
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-start items-center pt-24">
      <div className="text-center text-blue-950 decoration-wavy mb-8"> 
        <h2 className="text-4xl font-bold">
          EXPOSICION ANATOMICA
        </h2> 
      </div>

      <div className="container mx-auto mt-24">
        <div className="grid grid-cols-5 gap-4 justify-center">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="text-center flex flex-col items-center">
              <img src={slide.url} alt={`slide-${slideIndex}`} className="mx-auto w-96 h-96 object-contain rounded" />
              <p className="mt-2"><span className="font-bold">{slide.text}</span></p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Galeria;
