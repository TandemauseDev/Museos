import { Outlet } from 'react-router-dom'
import UMNG from '../img/umng_sin_fondo.png'
const Header = () => {
    return (
        <div className='fixed top-0 inset-x-0'>
        <nav className=' flex items-center justify-between bg-black'>

                <div>
                    <a href="/inicio"><img src={UMNG} className='max-w-52	' alt="" /></a>

            </div>

            <div className=''>
                    <ul className=' text-white flex p-6 '>
                        <a href="/tour"><li className='mx-2'>Tour virtual</li></a>
                        <a href="galeria"><li className='mx-2'>Explorador</li></a>
                        <a href=""><li className='mx-2'>Acerca de</li></a>
                
                
                
                </ul>
                </div>
            </nav>

            <Outlet/>
            </div>
  )
}

export default Header