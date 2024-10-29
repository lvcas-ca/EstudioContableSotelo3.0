import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home.jsx';
import ConsultoriaProfesional from "./pages/ConsultoriaProfesional.jsx";
import InfoCripto from './pages/InfoCripto.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/consultoria',
    element: <ConsultoriaProfesional/>,
  },
  {
    path: '/cripto',
    element: <InfoCripto/>,
  }
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
 </React.StrictMode>,
)
