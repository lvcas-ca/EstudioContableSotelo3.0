
import HeaderCss from "./Header.module.css"
import TextSlider from "./TextSlider/TextSlider.tsx";
import { NavBar } from "./NavBar/NavBar.jsx";
import { Cotizaciones } from "./Cotizaciones/Cotizaciones.jsx";
import { motion } from "framer-motion";

export const Header = () => {


  return (
    <>
      <NavBar />
      <Cotizaciones />
      <section className={`${HeaderCss.hero} flex`}>
        <motion.div
          className="box flex flex-col justify-center items-center text-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Dra. Marisa Paola Sotelo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Contadora Pública Nacional. Tº436 Fº144 // T°183 F°78. Licenciada en
            Administración y Gestión Empresarial. Tº54 Fº38 // T°1 F°100. Técnica
            en Comercialización, Especialista en PYMES, Perito Auxiliar de
            Justicia.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            <TextSlider
                words={[
                  "ESTUDIO CONTABLE SOTELO",
                  "Pequeños contribuyentes",
                  "Impuestos",
                  "Laboral y previsional",
                  "Sociedades",
                  "Administración de consorcios",
                  "Informes y certificaciones",
                  "Servicios impositivos",
                  "Consultorías profesionales",
                ]}
              />
          </motion.div>
        </motion.div>
       
      </section>
    </>
  );
};
