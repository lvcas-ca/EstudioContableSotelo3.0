import React from 'react';
import { motion } from 'framer-motion';
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
        
            <motion.div className="marcas-container flex flex-wrap justify-center items-center gap-[90px] pt-[50px] pb-[100px]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  viewport={{ once: true }}
            >
                <img src={marca1} alt="Marca 1" className="marca-image" />
                <img src={marca2} alt="Marca 2" className="marca-image h-[45px]" />
                <img src={marca3} alt="Marca 3" className="marca-image" />  
            </motion.div>
        </>
       
    );
};

export default MarcasQueTrabajanConNosotros;