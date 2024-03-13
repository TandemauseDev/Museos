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
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
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
    <div>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div className='text-center text-blue-950 decoration-wavy'> 
          <h2 className='text-4xl py-4'>
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
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      {/* Espacio entre el slide y el párrafo */}
      <div className="mt-8"></div>
      {/* Información adicional debajo del slide */}
      <div className="text-center">
        <p>nico esta muy lindo </p>
      </div>
    </div>
  );
};

export default Galeria;
