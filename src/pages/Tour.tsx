import React from 'react';
import recorrido from '../img/UMNG-Light 1.png';


const Tour = () => {
  return (
    <div className='h-screen flex  justify-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${recorrido})` }}>
          <div className='text-center text-blue-950 capitalize' >
                        <h1 className='text-4xl py-12 font-extrabold'>
              RECORRIDO VIRTUAL <br />
          </h1>
        
              <div className='flex items-center justify-around py-5 '>
                  <button className='bg-white text-blue-950 py-2 px-4 rounded-full font-bold ' type="button"> COMENCEMOS</button>
                
              </div>
                   
          </div>

    </div>
  )
}

export default Tour

