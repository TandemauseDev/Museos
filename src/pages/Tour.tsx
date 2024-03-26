import React from 'react';
import recorrido from '../img/PANTALLA RECORRIDO.png';
import Swal from 'sweetalert2';

const Tour = () => {
  const handleClick = () => {
    // Definir los elementos que quieres mostrar en la caja 
    const items = [
      'Necesitamos que se encuentre comodo para la apreciacion de las piezas',
      'Para version movil encontrara un joistick para que su movimiento no se encuentre limitado',
      'El recorrido constara de una entrada donde con su usuario podra apreciar de toda la inmersion del museo'
    ];

    const htmlContent = items
      .map((item, index) => `<li>${index + 1}. ${item}</li>`)
      .join('');

    Swal.fire({
      title: 'TENGA EN CUENTA',
      html: `<ul>${htmlContent}</ul>`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      customClass: {
        container: 'my-swal',
        title: 'my-title',
        htmlContainer: 'my-html-container',
        confirmButton: 'my-confirm-button',
        cancelButton: 'my-cancel-button',
      },
    });
  };

  return (
    <div className='h-screen flex justify-center'>
      <div className='text-center text-blue-950 capitalize relative'>
        <h1 className='text-4xl py-12 font-extrabold'>
          RECORRIDO VIRTUAL <br />
        </h1>
        <div className='relative my-6'>
          <img src={recorrido} className='max-w-full max-h-screen opacity-90' alt='' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <button
              className='bg-white text-blue-950 py-2 px-4 rounded-full font-bold'
              onClick={handleClick}
              type='button'
            >
              COMENCEMOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
