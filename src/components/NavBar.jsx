import { useState } from "react";
import {  Link } from "react-router-dom";

import useResponsiveWidth from "./utilities/useResponsiveWidth";

import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/20/solid";

import HeaderCss from "./Header.module.css"


export const NavBar = () =>{

  const width = useResponsiveWidth();
  const medaQueryDesk = 1195;

  const [active, setActive] = useState(null);

  const handleClick = () =>{
    if(!active){
        setActive(true);
    }else{
        setActive(false);
    }
  }

    return (
      <>
        <nav className={HeaderCss.nav}>
          <ul
            className={`
            
            ${
              width < medaQueryDesk
                ? HeaderCss["ul-absolute"]
                : HeaderCss["ul-block"]
            }
            ${active ? HeaderCss["nav-active"] : HeaderCss["nav-desactive"]}
            
          `}
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <div className={HeaderCss.dropdown}>
                <div className={HeaderCss.dropbtn}>
                  Servicios
                  <ChevronDownIcon className="HeaderCss.arrowDown size-5"/>
                </div>

                <div className={HeaderCss.dropdowncontent}>
                  <Link to={"/cripto"}>Link 1</Link>
                  <Link to={"/cripto"}>Link 1</Link>
                  <Link to={"/cripto"}>Link 1</Link>
                </div>
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

        <Bars2Icon
          onClick={handleClick}
          className={`
          ${width < medaQueryDesk ? "size-8 text-white" : "hidden"} 
        `}
        />
      </>
    );
   
}