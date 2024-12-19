import { useState } from "react";
import {  Link } from "react-router-dom";

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
   

  


    return (
      <>
        <div className={NavBarCss.content}>
          <img
            className={NavBarCss.img}
            src={siteLogo}
            alt="Logo"
            width={100}
            height={80}
          />

          <nav className={NavBarCss.nav}>
          <ul
              className={`${width < medaQueryDesk ? NavBarCss["ul-absolute"] : NavBarCss["ul-block"]} 
               ${active ? NavBarCss["nav-active"] : NavBarCss["nav-desactive"]}`}
          >

          <XMarkIcon
            onClick={handleClick}
            className={`
          ${width < medaQueryDesk ? "size-8 text-white flex-grow-0 flex-shrink basis-auto self-end" : "hidden"} 
        `}
          />
              <li>
                <Link to="/">Inicio</Link>
              </li>

              <li> 
                <div className={NavBarCss.dropdown}>
                  {width < medaQueryDesk ?  <Link to={"/ServiciosPage"}>Servicios</Link>: <Dropdown/>}
              
                </div>
              </li>

              <li>
                <a onClick={() => window.location.replace("/#about")}>
                  Quienes somos
                </a>
              </li>

              <li>
                <Link to={"/consultoria"}>Links Utiles</Link>
              </li>
              <li>
                <Link to={"/cripto"}>Info Cripto</Link>
              </li>
              <li>
                <Link to={"/cripto"}>Blog</Link>
              </li>
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

