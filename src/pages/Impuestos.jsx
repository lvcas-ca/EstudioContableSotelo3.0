

import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";

export const Impuestos = () => {
  return (
    <Layout>
            <HeroOfEachService
                title={"Impuestos"}
                LinkServiceToBreadcrumb={"impuestos"}
                urlBgImage={
                "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
                }
            />  

  <div className="w-[100%] md:w-[70%] px-[10px] md:px-[100px] pt-[50px]">
        <h2 className="text-white text-[40px] font-semibold leading-9 font-Outfit">
          Servicios de Impuestos
        </h2>
        <p className="font-medium">
          En Estudio Contable Sotelo brindamos asesoramiento integral y soluciones estratégicas en materia impositiva, 
          ayudando a nuestros clientes a cumplir con sus obligaciones fiscales y 
          optimizar su carga tributaria.
        </p>
        <img
          className="py-[20px]"
          src="https://res.cloudinary.com/dgtfypija/image/upload/v1734655692/Esstudio%20Contable%20web/impuestos_jtnohr.png"
          width={500}
          alt="Calculadora"
        />

        <h3 className="text-white text-[25px] font-semibold leading-7">
          Planificación Fiscal y Asesoramiento Integral
        </h3>

        <p className="pt-[20px] font-medium">
            Ofrecemos estrategias personalizadas para maximizar beneficios fiscales 
            y cumplir con la normativa vigente:
        </p>
        <ul className="list-disc ml-5 pt-[20px] font-medium">
          <li>
            <strong>Optimización tributaria:</strong> Diseñamos un plan fiscal adaptado a las necesidades del cliente,
             identificando oportunidades de ahorro impositivo.
          </li>
          <li>
             <strong>Revisión de obligaciones fiscales:</strong> Analizamos la situación impositiva para garantizar el 
             cumplimiento de todos los requerimientos legales.
          </li>
          <li>
             <strong>Consultoría actualizada:</strong> Proporcionamos asesoramiento constante basado en las 
             últimas regulaciones fiscales.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
         Gestión de Impuestos Nacionales, Provinciales y Municipales
        </h3>
        <p className="pt-[10px] font-medium">
          Realizamos la inscripción y baja de impuestos en diferentes 
          jurisdicciones, asegurando una gestión eficiente:
        </p>
        <ul className="list-disc ml-5 pt-[10px] font-medium">
          <li>
            <strong>Alta y baja de impuestos:</strong> Gestionamos trámites en organismos nacionales, provinciales y municipales.
          </li>
          <li>
             <strong>Regularización de situaciones fiscales:</strong>  Asistimos en la actualización o cierre de 
             actividades según las necesidades del cliente.
          </li>
          <li>
             <strong>Gestión ágil:</strong> Nos ocupamos del seguimiento y resolución de trámites para garantizar procesos rápidos y eficaces.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
         Impuesto a las Ganancias y Bienes Personales
        </h3>
        <p className="pt-[10px] font-medium">
          Asesoramos en el correcto cálculo y liquidación de estos impuestos 
          clave para personas físicas y jurídicas:
        </p>
        <ul className="list-disc ml-5 pt-[10px] font-medium">
          <li>
             <strong>Cálculo y presentación:</strong> Realizamos el cálculo detallado y la presentación de las declaraciones juradas.
          </li>
          <li>
           <strong>Análisis patrimonial:</strong> Evaluamos los bienes y ganancias para optimizar el impacto impositivo.
          </li>
          <li>
           <strong>Cumplimiento legal:</strong> Aseguramos que las presentaciones se ajusten a la normativa vigente.
          </li>
          
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Atención de Inspecciones y Verificaciones
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
          Brindamos apoyo profesional en situaciones de auditorías y requerimientos de organismos de 
          control:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
              <strong>Preparación de documentación:</strong> Organizamos y revisamos los documentos 
              necesarios para responder a inspecciones.
          </li>
          <li>
           <strong>Asistencia en inspecciones:</strong> Representamos a nuestros clientes ante la 
            AFIP y otros organismos fiscales.
          </li>

          <li>
           <strong>Resolución de conflictos:</strong> Gestionamos verificaciones para prevenir sanciones o embargos.
          </li>
         
        </ul>


        <ResumeServiceFooter
          text={
            "Nuestro equipo está comprometido con ofrecer un servicio proactivo y adaptado a cada caso, garantizando el cumplimiento fiscal y proporcionando tranquilidad a nuestros clientes. ¡Contáctanos y confía en nuestra experiencia!"
          }
        />
    </div>      
    </Layout>
  )
}
