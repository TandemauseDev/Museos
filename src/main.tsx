import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import Galeria from './pages/Galeria.tsx'
import Modelo from './pages/Modelo.tsx'
import Tour from './pages/Tour.tsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/inicio',
        element: <App/>
      },
        {
        path: '/galeria',
        element: <Galeria/>
      },
      {
        path: '/modelo',
        element: <Modelo/>
      },
      {
        path: '/tour',
        element: <Tour/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
