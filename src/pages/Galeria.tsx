import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import image1 from '../img/CEREBRO.png';
import image2 from '../img/pierna.jpg';
import image3 from '../img/pulmones.jpg';
import image4 from '../img/CRANEO.jpg';
import image5 from '../img/bloque diafragmatico.jpg';

const Galeria = () => {
  const slides = [
    {
      url: image1,
      text: "SISTEMA NERVIOSO CENTRAL"
    },
    {
      url: image2,
      text: "EXTREMIDAD INFERIOR"
    },
    {
      url: image3,
      text: "SISTEMA RESPIRATORIO"
    },
    {
      url: image4,
      text: "CRANEO "
    },
    {
      url: image5,
      text: "BLOQUE DIAFRAGMATICO"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => { 
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px- relative group '>
        <div className='text-center text-blue-950 decoration-wavy'> 
          <h2 className='text-4xl py-0.5 font-extrabold'>
            EXPOSICION ANATOMICA <br />
          </h2> 
        </div>

        <img
          src={slides[currentIndex].url}
          alt="slide"
          className='w-full h-full rounded-2xl object-contain'
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-950' : 'text-gray-400'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      {/* Espacio entre el slide y el párrafo */}
      <div className="mt-4"></div>
      <div className='pd-2'></div>
      {/* Información adicional debajo del slide */}
      <div className="text-center text-2xl py-2 font-bold">
        <p>{slides[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default Galeria;
