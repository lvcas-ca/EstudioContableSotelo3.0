import { Form } from "./Form/Form"
import img1 from '/src/assets/call.png';
import img2 from '/src/assets/Symbol.png';
import facebook from '/src/assets/facebok.png';
import instagram from '/src/assets/insta.png';

import ContactoCss from "../Contacto/Contacto.module.scss";
import { motion } from "framer-motion";

export const Contacto = () =>{

    return(
        <>
        <section id="contacto" className={ContactoCss.contact__container}>
          <motion.div 
            className={ContactoCss.contact__container__text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{
              duration: 1,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
             viewport={{ once: true }}
            
            >
              Podemos asesorarte en lo que necesites.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
               duration: 1,
               delay: 0.2,
               ease: [0, 0.71, 0.2, 1.01],
             }}
              viewport={{ once: true }}
            
            >
              <span>
                Por favor complete el formulario para que podamos brindarle una respuesta 
                acorde a lo que necesita. Una vez procesados los datos, un profesional se prondrá 
                en contacto.
              </span> 
            </motion.div>
          

            <hr />

            <motion.div 
             className={ContactoCss.contact__container__text__call}
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{
              duration: 1,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
             viewport={{ once: true }}
            
            >
              <div className={ContactoCss.contact__container__text__call__icon1}>
                <img src={img1} alt="" />
                <span>1124556881</span>
              </div>

              <div className={ContactoCss.contact__container__text__call__icon1}>
                <img src={img2} alt="" />
                <span>marisasotelo.ms@gmail.com</span>
              </div>

              <div className={ContactoCss.contact__container__text__call__icon1}>
                <img src={img2} alt="" />
                <span>estudiocontablesotelo1979@gmail.com</span>
              </div>

            </motion.div>

            <motion.div className={ContactoCss.contact__container__text__redes}
             
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{
              duration: 1,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
             viewport={{ once: true }}
            
            >
              <a href="https://www.facebook.com/people/Estudio-Contable-Sotelo/100084190453606/" target="_blank"><img src={facebook} alt="facebok link" /></a>
              <a href="https://www.instagram.com/estudiocontablesotelo/" target="_blank"><img src={instagram} alt="Instagram" /></a>   
                  
            </motion.div>

          </motion.div>
          <Form/>
        </section>
          
        </>
    )

}