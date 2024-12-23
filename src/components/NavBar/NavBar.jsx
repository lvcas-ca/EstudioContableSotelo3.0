import { useState } from "react";
import {  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import facebook from '/src/assets/facebok.png';
import instagram from '/src/assets/insta.png';


import { Dropdown } from "../NavBar/DropDown/Dropdown"

import useResponsiveWidth from "../utilities/useResponsiveWidth";

import { Bars2Icon} from "@heroicons/react/20/solid";
import {XMarkIcon} from "@heroicons/react/20/solid";

import NavBarCss from "../NavBar/NavBar.module.css";

import siteLogo from "/src/assets/logo-white.png";


export const NavBar = () =>{

  const width = useResponsiveWidth();
  const medaQueryDesk = 1195;

  const [active, setActive] = useState(null);

  const handleClick = () =>{

    setActive(prev => !prev);
    if(!active){
        setActive(true);
    }else{
        setActive(false);
    }
  }

  const navigate = useNavigate();

  const handleScroll = () => {
    navigate("/#about"); // Cambia la ruta
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Asegúrate de que el componente esté montado antes del scroll
    setActive(false);
  };
   

  


    return (
      <>
        <div className={NavBarCss.content}>

        <Link to="/">
          <img
              className={NavBarCss.img}
              src={siteLogo}
              alt="Logo"
              width={100}
              height={80}
            />
        </Link>
         

          <nav className={NavBarCss.nav}>
          <ul 
              className={`${width < medaQueryDesk ? NavBarCss["ul-absolute"]  : NavBarCss["ul-block"]} 
               ${active ? NavBarCss["nav-active"] : NavBarCss["nav-desactive"]}`}
          >

          <XMarkIcon
            onClick={handleClick}
            className={`
          ${width < medaQueryDesk ? "size-8 text-white flex-grow-0 flex-shrink basis-auto self-end" : "hidden"} 
        `}
          />
              <li>
                <Link to="/"  onClick={handleClick}>Inicio</Link>
              </li>

              <li> 
                <div className={NavBarCss.dropdown}>
                  {width < medaQueryDesk ?  <Link to={"/ServiciosPage"} onClick={handleClick}>Servicios</Link>: <Dropdown/>}
              
                </div>
              </li>

              <li>
                <a onClick={handleScroll}>
                  Quienes somos
                </a>
              </li>
              <li>
                <Link to={"/cripto" } onClick={handleClick}>Info Cripto</Link>
              </li>
              <li>
                <Link to={"/cripto"} onClick={handleClick}>Blog</Link>
              </li>

              <div  className={`
                                  ${width < medaQueryDesk ? "text-white flex gap-[10px]" : "hidden"} 
                          `}>
                            <a href="https://www.facebook.com/people/Estudio-Contable-Sotelo/100084190453606/" target="_blank"><img src={facebook} alt="facebok link" /></a>
                            <a href="https://www.instagram.com/estudiocontablesotelo/" target="_blank"><img src={instagram} alt="Instagram" /></a>   
              </div>

            </ul>

           
      
          </nav>
          
        
          <button
            className={width < medaQueryDesk ? "hidden" : "bg-custom-gradient"}
            onClick={() => window.location.replace("/#contacto")}
              >
            Contacto
          </button>

          <Bars2Icon
            onClick={handleClick}
            className={`
          ${width < medaQueryDesk ? "size-8 text-white" : "hidden"} 
        `}
          />
        </div>
      </>
    );

   
   
}

