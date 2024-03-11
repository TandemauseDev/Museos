import React from 'react'
import craneo from '../img/CRANEO.jpg'

const Tour = () => {
  return (
    <div>
      <div className='h-screen flex items-center justify-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${craneo})` }}>
          <div className='text-center text-white ' >
                        <h2 className='text-4xl py-4'>
              Bienvenido <br />
          </h2>
          
          <h1 className='text-5xl'>
              MUSEO ANATOMÍA <br /> UMNG
              
              </h1>
              

              <div className='flex items-center justify-around py-5 '>
                  <button className='bg-white text-blue-950 py-2 px-4 rounded-full font-bold ' type="button"> Tour virtual</button>
                  <button className='bg-white text-blue-950 py-2 px-4 rounded-full font-bold ' type="button"> Tour virtual</button>
                
              </div>
              
              
              
          </div>

          
          
          
          
    </div>
    </div>
  )
}

export default Tour