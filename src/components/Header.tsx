import React from 'react'
import UMNG from '../img/umng_sin_fondo.png'
const Header = () => {
    return (
        <div className='fixed top-0 inset-x-0'>
        <nav className=' flex items-center justify-between bg-black'>

            <div>
                <img src={UMNG} className='max-w-52	' alt="" />
            </div>

            <div className=''>
            <ul className=' text-white flex p-6 '>
                <li className='mx-2'>Tour virtual</li>
                <li className='mx-2'>Explorador</li>
                <li className='mx-2'>Acerca de</li>
                </ul>
                </div>
            </nav>
            </div>
  )
}

export default Header