import React from 'react';

import marca1 from "../../assets/marca1.png";
import marca2 from "../../assets/marca2.png";
import marca3 from "../../assets/marca3.png";
import { Title } from '../Title/Title';


const MarcasQueTrabajanConNosotros = () => {
    return (
        <>
         <Title 
           titulo={"Empresas que confían en nosotros"}
           descripcion={"Nuestra experiencia y dedicación son respaldadas por estas marcas que han depositado su confianza en nuestro trabajo."}
           colorTxt={"text-white"}
         />
        
            <div className="marcas-container flex flex-wrap justify-center items-center gap-[90px] pt-[50px] pb-[100px]">
                <img src={marca1} alt="Marca 1" className="marca-image" />
                <img src={marca2} alt="Marca 2" className="marca-image h-[45px]" />
                <img src={marca3} alt="Marca 3" className="marca-image" />  
            </div>
        </>
       
    );
};

export default MarcasQueTrabajanConNosotros;