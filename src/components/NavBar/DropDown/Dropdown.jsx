import  { useRef, useState, useEffect } from 'react'; // Importing Modules
import {  Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavBarCss from "../NavBar.module.css";


// Creating a function to track the changes in DropDown List
export const Dropdown = () =>{ 
//Using useState to set the defualt value of DropDown Menu and declare the values
const [toggle, setToggle] = useState(false);
const dropdownRef = useRef(null); // Referencia para el dropdown

const handleClick = () =>{
   setToggle(!toggle);
}

  // Cierra el dropdown si el clic es fuera del mismo
const handleOutsideClick = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setToggle(false);
    }
};

// Agregar y eliminar el listener global
useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

return (
  <>
    
  <div className={NavBarCss.dropbtn} onClick={handleClick}>
    <span>Servicios</span>
    <ChevronDownIcon/>
  </div>
 
    <div ref={dropdownRef} className={ `text-white ms:relative lg:absolute  flex flex-col left-6 top-[50px] z-50 mt-2 w-56 rounded-md bg-[#262B3E] shadow-lg ${toggle ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <Link to={"/PequeñosContribuyentes"}>Pequeños Contribuyentes</Link>
            <Link to={"/impuestos"}>Impuestos</Link>
            <Link to={"/LaboralProvisinal"}>Laboral & Previsional</Link>
            <Link to={"/Sociedades"}>Sociedades</Link>
            <Link to={"/AdminConsorcios"}>Administración de consorcios</Link>
            <Link to={"/InformesCertificaciones"}>Informes y Certificaciones</Link>
            <Link to={"/ServiciosImpositivos"}>Servicios impositivos</Link>
            <Link to={"/ConsultoriasProfesionales"}>Consultorías Profesionales</Link>
      </div>
  
  
  </>
);
}
