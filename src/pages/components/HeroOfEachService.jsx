import React from 'react'
import {  Link } from "react-router-dom";

export const HeroOfEachService = ({title, LinkServiceToBreadcrumb, urlBgImage }) => {
  return (
    <>
    <div className='flex justify-center items-start flex-col px-[10px] md:px-[100px] h-[300px]'  style={{ backgroundImage: `url(${urlBgImage})` }}>
        <h1 className='text-blacks font-Outfit font-bold text-[40px] md:text-[50px]'>{title}</h1>
        
        <nav  aria-label="Breadcrumb">
            <ul className='flex flex-row gap-[10px] pt-[10px]'>
              <li className=''>
               <Link className='text-slate-400 font-semibold hover:text-slate-300' to="/">Inicio</Link>
              </li>
              <li>
               <Link className='text-slate-400 font-semibold hover:text-slate-300' to={"/ServiciosPage"}>Servicios</Link>
              </li>
              <li>
                <Link className='text-slate-400 font-semibold hover:text-slate-300' to={`/${LinkServiceToBreadcrumb}`}>{title}</Link>
              </li>
            </ul>
        </nav>
    </div>
      
    </>
  )
}
