import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'


import './index.css'

import Home from './pages/Home.jsx';

import InfoCripto from './pages/InfoCripto.jsx';
import ServiciosPage from "./pages/ServiciosPage.jsx";
import PequeñosContribuyentes from './pages/PequeñosContribuyentes.jsx';
import { Impuestos } from "./pages/Impuestos.jsx";
import LaboralProvisinal from  './pages/LaboralProvisinal.jsx';
import Sociedades from './pages/Sociedades.jsx';
import AdminConsorcios from "./pages/AdminConsorcios.jsx";
import InformesCertificaciones from './pages/InformesCertificaciones.jsx';
import ServiciosImpositivos from './pages/ServiciosImpositivos.jsx';
import ConsultoriasProfesionales from './pages/ConsultoriasProfesionales.jsx';
import { OnlyContact } from "./pages/OnlyContact.jsx";
import ScrollToTop from "./components/utilities/ScrollToTop.jsx";

import { SpeedInsights } from "@vercel/speed-insights/next"



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/PequeñosContribuyentes',
    element: <PequeñosContribuyentes/>,
  },

  {
    path: '/Impuestos',
    element: <Impuestos/>,
  },

  {
    path: '/LaboralProvisinal',
    element: <LaboralProvisinal/>,
  },

  
  {
    path: '/Sociedades',
    element: <Sociedades/>,
  },

  {
    path: '/AdminConsorcios',
    element: <AdminConsorcios/>,
  },

  {
    path: '/InformesCertificaciones',
    element: <InformesCertificaciones/>,
  },

    {
    path: '/ServiciosImpositivos',
    element: <ServiciosImpositivos/>,
  },

  {
    path: '/ConsultoriasProfesionales',
    element: <ConsultoriasProfesionales/>,
  },
  {
    path: '/cripto',
    element: <InfoCripto/>,
  },
  {
    path: '/ServiciosPage',
    element: <ServiciosPage/>,
  },

  {
    path: '/OnlyContact',
    element: <OnlyContact/>,
  }

  
]);


createRoot(document.getElementById('root')).render(

   
    <RouterProvider router={router}>
     <ScrollToTop/> 
    </RouterProvider>
 
)
