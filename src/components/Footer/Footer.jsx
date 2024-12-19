import facebook from '/src/assets/facebok.png';
import instagram from '/src/assets/insta.png';

import siteLogo from "/src/assets/logo-white.png";

import {  Link } from "react-router-dom";

export const Footer = () =>{
    return(
        <section className='bg-bgColorFooter flex flex-col md:flex-row gap-[30px] justify-center py-[50px] px-[10px] md:px-[100px] justify-between'>
          <div className='flex items-center flex-col gap-4 md:relative md:top-[0px]'>
            <img src={siteLogo} alt="Logo" width='100px'/>
            <span className='text-[#636363] font-outfit leading-[15px] text-xs '>
                Estudio contable Sotelo<br></br>
                Dra. María Paola Sotelo
            </span>
            <div className='flex gap-2'>
              <a href="https://www.facebook.com/people/Estudio-Contable-Sotelo/100084190453606/" target="_blank"><img src={facebook} alt="facebok link" /></a>
              <a href="https://www.instagram.com/estudiocontablesotelo/" target="_blank"><img src={instagram} alt="Instagram" /></a>       
            </div>
            
          </div>

          <div className='text-center font-Epilogue text-[#636363]'>
            <h2 className='pb-[20px] font-semibold text-left text-white'>Servicios</h2>
            <ul className='text-left flex flex-col gap-[10px]'>
                <li><Link to={"/PequeñosContribuyentes"}>Pequeños Contribuyentes</Link></li>
                <li><Link to={"/LaboralProvisinal"}>Laboral & Previsional</Link></li>
                <li> <Link to={"/Sociedades"}>Sociedades</Link></li>
                <li><Link to={"/AdminConsorcios"}>Administración de consorcios</Link></li>
                <li><Link to={"/InformesCertificaciones"}>Informes y Certificaciones</Link></li>
                <li><Link to={"/ServiciosImpositivos"}>Servicios impoositivos</Link></li>
                <li><Link to={"/ConsultoriasProfesionales"}>Consultorías Profesionales</Link></li>
            </ul>
          </div>

          <div className='flex flex-col items-left md:items-left  justify-center gap-[20px] text-left md:relative md:top-[-60px]'>
            <span className='text-white relative right-[0px] md:right-[0px] font-semibold'>Subscribe a nuestro Blog</span>
            <p className='w-[57%] text-[#636363]'>
                Suscribite a nuestro blog 
                sobre noticias financieras
            </p>
            <form action="" className='flex flex-col md:flex-row gap-[10px]'>
                <input type="text" placeholder='Ingresar e-mail'  className='p-[10px] rounded-[5px]'/>
                <button>Suscribirse</button>
            </form>
          </div>
        </section>
    )
}

