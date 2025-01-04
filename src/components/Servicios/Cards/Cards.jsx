import CardsCss from "../Cards/Cards.module.css";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { motion, animate } from "framer-motion";

export const Cards = () => {
  return (
    <>
      <motion.div
        className={CardsCss.cards}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
      
     
      >
          <Link
            to={"/PequeñosContribuyentes"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <motion.div
              className={CardsCss.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "linear", delay: 0.2 }}
              
            >
              <header>
                <span>(001)</span>
                <ArrowUpRightIcon className={CardsCss.arrow} />
              </header>
              <h2>Pequeños Contribuyentes</h2>
              <ul>
                <li>
                  Regimen Simplificado para pequeños Contribuyentes (Monotributo).
                </li>
                <li>
                  Alta/Baja de impuestos nacionales, provinciales y municipales.
                </li>
                <li>Impuesto a la Ganancias y Bienes Personales.</li>
              </ul>

              <button>Ver Mas</button>
            </motion.div>
          </Link>

        <Link to={"/Impuestos"} onClick={() => window.scrollTo(0, 0)}>
          <motion.div
            className={CardsCss.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(002)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Impuestos</h2>
            <ul>
              <li>
                Planificación fiscal y asesoramiento integral en materia
                tributaria.
              </li>
              <li>
                Alta/Baja de impuestos nacionales, provinciales y municipales.
              </li>
              <li>impuestos a la Ganancias y Bienes Personales.</li>
              <li>Atención de inspecciones y verificaciones.</li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>

        <Link to={"/LaboralProvisinal"} onClick={() => window.scrollTo(0, 0)}>
          <motion.div
            className={CardsCss.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(003)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Laboral & Previsional</h2>
            <ul>
              <li>Encuadre legal de las relaciones laborales.</li>
              <li>
                Altas tempranas. Modificación de datos y bajas de empleados.
              </li>
              <li>Atención en la organización de legajos de personal.</li>
              <li>Trámites ante los distintos organismos.</li>
              <li>
                Liquidación de sueldos, indemnizaciones y emisión de recibos.
              </li>
              <li>
                Liquidación cargas sociales, F931 y emisión de boletas
                sindicales.
              </li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>

        <Link to={"/Sociedades"} onClick={() => window.scrollTo(0, 0)}>
          <motion.div
            className={CardsCss.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(004)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Sociedades</h2>
            <ul>
              <li>
                Constitución de sociedades en CABA y provincia de Buenos Aires.
              </li>
              <li>Trámites ante IGJ y DPPJ.</li>
              <li>Inscripción y cesación de administradores.</li>
              <li>Rúbrica de libros contables.</li>
              <li>
                Asistencia en la confección de actas de directorio y asambleas.
              </li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>

        <Link to={"/AdminConsorcios"} onClick={() => window.scrollTo(0, 0)}>
          <motion.div 
            className={CardsCss.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(005)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Administración de consorcios</h2>
            <ul>
              <li>Administración y conservación del inmueble.</li>
              <li>Gestión de fondos y rendición de cuentas.</li>
              <li>Información contable conforme a la ley.</li>
              <li>
                Información contable incluida en la liquidación mensual conforme
                a la ley.
              </li>
              <li>Convocatoria de asambleas.</li>
              <li>Seguimiento del cobro de expensas.</li>
              <li>Custodia de libros y documentos del consorcio.</li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>

        <Link
          to={"/InformesCertificaciones"}
          onClick={() => window.scrollTo(0, 0)}
        >
          <motion.div 
             className={CardsCss.card}
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(006)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Informes y Certificaciones</h2>
            <ul>
              <li>Certificación de origen lícito de fondos.</li>
              <li>Certificación de ingresos personales.</li>
              <li>Manifestación de bienes.</li>
              <li>Certificación de ingresos y gastos.</li>
              <li>Informes de cumplimiento.</li>
              <li>Certificación pagos sujetos del exterior.</li>
              <li>Consultar por otras certificaciones.</li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>

        <Link
          to={"/ServiciosImpositivos"}
          onClick={() => window.scrollTo(0, 0)}
        >
          <motion.div 
             className={CardsCss.card}
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(007)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Servicios impositivos.</h2>
            <ul>
              <li>Asesoramiento y liquidacion de impuestos.</li>
              <li>Regularización fiscal.</li>
              <li>Inspecciones y requerimientos.</li>
              <li>Pequeños emprendedores.</li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>

        <Link
          to={"/ConsultoriasProfesionales"}
          onClick={() => window.scrollTo(0, 0)}
        >
          <motion.div 
            className={CardsCss.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
          >
            <header>
              <span>(008)</span>
              <ArrowUpRightIcon className={CardsCss.arrow} />
            </header>
            <h2>Consultorías Profesionales</h2>
            <ul>
              <li>Diagnóstico de Administraciones Disfuncionales.</li>
              <li>Análisis de Flexibilidad Organizacional.</li>
              <li>Desarrollo de Soluciones Personalizadas.</li>
              <li>Acompañamiento Profesional Continuo.</li>
            </ul>

            <button>Ver Mas</button>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};
