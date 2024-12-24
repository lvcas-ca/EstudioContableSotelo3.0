import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";


function ServiciosImpositivos(){
    return(
      <Layout>
        <HeroOfEachService
          title={"Servicios Impositivos"}
          LinkServiceToBreadcrumb={"ServiciosImpositivos"}
          urlBgImage={
          "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
          }
        /> 

    <div className="w-[100%] md:w-[70%] px-[10px] md:px-[100px] pt-[50px]">
    
      <img
        className="py-[20px]"
        src="https://res.cloudinary.com/dgtfypija/image/upload/v1734498301/Esstudio%20Contable%20web/serviciosimp_u8a23y.png"
        width={500}
        alt="Calculadora"
      />

      <h3 className="text-white text-[25px] font-semibold leading-7">
        Asesoramiento y Liquidación de Impuestos
      </h3>

      <p className="pt-[20px] font-medium">
        Brindamos un servicio integral de consultoría y liquidación impositiva,
        asegurando el cumplimiento de las obligaciones fiscales tanto de personas 
        físicas como jurídicas. Nos especializamos en impuestos mensuales y anuales, garantizando actualización constante y asesoramiento personalizado.
      </p>
      <ul className="list-disc ml-5 pt-[20px] font-medium">
        <li>
      
        Monitoreo constante de las normativas fiscales para asegurar el cumplimiento y optimización de los impuestos.
        </li>
        <li>
        Liquidación Integral de Impuestos:
        Incluye Impuesto a las Ganancias, Bienes Personales, IVA, Ingresos Brutos, tasas municipales y autónomos.
        </li>
        <li>
         Gestión del Trámite MiPyME, inscripción y seguimiento de impuestos específicos como Sellos y Régimen Cedular.         
         </li>
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
         Regularización Fiscal
      </h3>
      <p className="pt-[10px] font-medium">
         Ofrecemos soluciones para la regularización de deudas fiscales, gestionando planes de pago y moratorias con
         organismos como AFIP, ARBA y AGIP. Además, intervenimos en situaciones complejas, 
         aplicando recursos legales para defender los intereses del contribuyente.
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
        Gestión eficiente de planes de regularización con AFIP, ARBA y AGIP, adaptados a la situación fiscal del contribuyente.
        </li>
        <li>
        Tramitación de inscripciones, bajas y emisión de constancias que acreditan el cumplimiento fiscal.
        </li>
        <li>
         Aplicación de recursos legales: apelaciones, recusaciones y atención en el Tribunal Fiscal de la Nación.
        </li>
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
        Inspecciones y Requerimientos
      </h3>
      <p className="pt-[10px] font-medium">
        Brindamos un servicio especializado para la atención de inspecciones y requerimientos fiscales, 
        minimizando riesgos y evitando embargos o ejecuciones. Actuamos como nexo entre el contribuyente 
        y los organismos de control.
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
         Asistencia profesional en la atención y resolución de inspecciones integrales y requerimientos fiscales.
        </li>
        <li>
        Gestión de conflictos e intimaciones con organismos como IGJ, Ministerio de Trabajo, AFIP, AGIP y ARBA.
        </li>
        <li>
         Estrategias preventivas para evitar embargos fiscales y asegurar el cumplimiento de las obligaciones.
        </li>
        
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
        Pequeños Emprendedores
      </h3>
      <p className="pt-[10px] font-medium">
        Acompañamos a pequeños contribuyentes y emprendedores, ofreciendo asesoramiento personalizado y 
        realizando trámites en diversas jurisdicciones. Facilitamos el cumplimiento impositivo y
        organizamos la situación fiscal de manera integral.
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
        Inscripción en Monotributo, Régimen Simplificado de Ingresos Brutos y Convenio Multilateral.
        </li>
        <li>
         Análisis de gastos, ingresos y cumplimiento de los parámetros exigidos por AFIP.
        </li>
        <li>
         Gestión de domicilios electrónicos y presentación de notificaciones y descargos a través de Trámites a Distancia.
        </li>
       
      </ul>


    

      <ResumeServiceFooter
        text={
        "Brindamos un servicio profesional y a medida, diseñado para satisfacer las necesidades específicas de cada cliente, garantizando soluciones eficientes y el cumplimiento riguroso de las normativas fiscales y legales vigentes."
        }
      />
    </div>  

      </Layout>
       
    )
}

export default ServiciosImpositivos;