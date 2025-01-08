import QuienesCss from "../QuienesSomos/Quienes.module.scss";
import unicon from "/src/assets/uni-icon.png";
import idea from "/src/assets/idea.png";
import hand from "/src/assets/hand.png";
import rocket from "/src/assets/rocket.png";
import { motion } from "framer-motion";

function QuienesSomos() {
  return (
    <section id="about" className="bg-[#1C1D20] pb-[80px]">
      <motion.h2 className="text-[50px] lg:text-[70px] text-center font-Khand font-bold bg-[#1C1D20] pb-[50px] pt-[50px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: true }}
      
      >
        Quiénes Somos
      </motion.h2>
      <div className={QuienesCss.quienes_container}>
        <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          src="https://res.cloudinary.com/dgtfypija/image/upload/v1733458923/Esstudio%20Contable%20web/universidad-sm_qqnzdt.png"
          alt="Universidad"
        />
        <div className={QuienesCss.quienes_container__text1}>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}

          >
            Conocimiento y Liderazgo
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          
          >
            AL FRENTE DEL ESTUDIO CONTABLE SOTELO SE ENCUENTRA LA DRA. MARISA
            PAOLA SOTELO. CONTADORA PÚBLICA NACIONAL EGRESADA DE LA UNIVERSIDAD
            NACIONAL DE GRAL. SAN MARTÍN, MATRICULADA EN EL CONSEJO PROFESIONAL
            DE CIENCIAS ECONÓMICAS DE LA CIUDAD AUTÓNOMA DE BUENOS AIRES Y EN EL
            CONSEJO PROFESIONAL DE CIENCIAS ECONÓMICAS DE LA PROVINCIA DE BUENOS
            AIRES.
          </motion.p>

          <motion.div className={QuienesCss.quienes_container__subtext1}
           
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{
             duration: 1,
             delay: 0.4,
             ease: [0, 0.71, 0.2, 1.01],
           }}
           viewport={{ once: true }}
          
          >
            <img src={unicon} alt="Uni" />
            <div>
              <span>Formación Académica de Excelencia</span>
              <p>
                Su sólida formación profesional garantiza un profundo
                conocimiento en materia contable y fiscal, asegurando soluciones
                precisas y adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </motion.div>

          <motion.div className={QuienesCss.quienes_container__subtext1}
           
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{
             duration: 1,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01],
           }}
           viewport={{ once: true }}
          
          >
            <motion.img src={hand} alt="Mano" />
            <div>
              <span>Confianza y Profesionalismo</span>
              <p>
              Estar matriculada en organismos reconocidos respalda su ética profesional, 
              ofreciendo a los clientes la tranquilidad de trabajar con una contadora de confianza.
              </p>
            </div>
          </motion.div>
        </div>

       
        <div className={QuienesCss.quienes_container__text1}>
          <motion.h3
          
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}

          >
            Asesoramiento Integral para el Crecimiento Empresarial
          
          </motion.h3>
          <motion.p
           
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{
             duration: 1,
             delay: 0.3,
             ease: [0, 0.71, 0.2, 1.01],
           }}
           viewport={{ once: true }}
          
          >
            EN NUESTRO ESTUDIO CONTABLE BRINDAMOS ASESORAMIENTO INTEGRAL Y ASISTENCIA CONTABLE E 
            IMPOSITIVA PERMANENTE A EMPRESAS UNIPERSONALES Y PYMES, CUBRIENDO TODAS LAS ETAPAS DE 
            SU VIDA COMERCIAL.
          </motion.p>

          <motion.div className={QuienesCss.quienes_container__subtext1}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            <img src={idea} alt="Universidad San Martin" />
            <div>
              <span>Soluciones Personalizadas</span>
              <p>
                Con profesionalismo, resolvemos los aspectos clave relacionados con las necesidades y 
                expectativas de nuestros clientes, ofreciendo respuestas adaptadas a su problemática
                específica.
              </p>
            </div>
          </motion.div>

          <motion.div className={QuienesCss.quienes_container__subtext1}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{
                 duration: 1,
                 delay: 0.6,
                 ease: [0, 0.71, 0.2, 1.01],
               }}
               viewport={{ once: true }}
          >
            <img src={rocket} alt="Rocket" />
            <div>
              <span>Impulsamos el Desarrollo de tu Empresa</span>
              <p>
                Realizamos un análisis completo de las posibles alternativas para colaborar en el desarrollo
                y crecimiento de las empresas, garantizando un enfoque estratégico y eficiente.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.img
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{
             duration: 1,
             delay: 0.2,
             ease: [0, 0.71, 0.2, 1.01],
           }}
           viewport={{ once: true }}
          src="https://res.cloudinary.com/dgtfypija/image/upload/f_auto,q_auto/v1/Esstudio%20Contable%20web/bf9bmkgacvof44rhdbu1"
          alt="Universidad"
        />
      </div>

    </section>
  );
}

export default QuienesSomos;
