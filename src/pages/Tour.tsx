import React from 'react';
import recorrido from '../img/PANTALLA RECORRIDO.png';

const Tour = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='text-center text-blue-950 capitalize relative'>
        <h1 className='text-4xl py-12 font-extrabold'>
          RECORRIDO VIRTUAL <br />
        </h1>
        <div className='relative my-6' >
          <img src={recorrido} className='max-w-none max-h-none opacity-90' alt="" />
          <div className='absolute inset-0 flex items-center justify-center'>
            <button className='bg-white text-blue-950 py-2 px-4 rounded-full font-bold' type="button">COMENCEMOS</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Tour;
