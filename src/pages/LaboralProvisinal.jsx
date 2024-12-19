import '../Home.css';
import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";


function LaboralProvisinal(){
    return (
      <Layout>
        <HeroOfEachService
          title={"Laboral & Previsional"}
          LinkServiceToBreadcrumb={"PequeñosContribuyentes"}
          urlBgImage={
            "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
          }
        />

        <div className="px-[10px] md:px-[100px] pt-[50px]">
          <h2 className="font-Outfit text-white text-[40px] font-semibold leading-9">
            Laboral & Previsional
          </h2>
          <p className="w-[70%] pt-[20px] font-medium">
            En nuestro estudio contable ofrecemos un asesoramiento integral en
            materia laboral y previsional, asegurando el correcto encuadre legal
            de las relaciones laborales y la gestión eficiente de los trámites
            vinculados con el personal. Los servicios que brindamos incluyen:
          </p>
          <img
            className="py-[20px]"
            src="https://res.cloudinary.com/dgtfypija/image/upload/v1734408090/Esstudio%20Contable%20web/laboral_vxm07x.png"
            width={500}
            alt="Laboral"
          />

          <h3 className="text-white text-[25px] font-semibold leading-7">
            Encuadre Legal de las Relaciones Laborales
          </h3>

          <p className="w-[70%] pt-[20px] font-medium">
            Nos aseguramos de que las relaciones laborales dentro de tu empresa
            se ajusten a las normativas legales vigentes, tanto en términos de
            contratación como de cumplimiento de los derechos de los
            trabajadores. Ofrecemos:
          </p>
          <ul className="list-disc ml-5 w-[70%] pt-[20px] font-medium">
            <li>
              Asesoramiento en la elección del tipo de contrato más adecuado
              para cada situación.
            </li>
            <li>Regularización de trabajadores no registrados.</li>
            <li>Análisis de convenios colectivos aplicables.</li>
          </ul>

          <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
            Altas Tempranas, Modificación de Datos y Bajas de Empleados
          </h3>
          <p className="w-[70%] pt-[10px] font-medium">
            Gestionamos de manera eficiente los trámites necesarios ante los
            organismos correspondientes para la correcta incorporación y
            desvinculación de empleados:
          </p>
          <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
            <li>
              Altas Tempranas: inscripción de nuevos empleados en la seguridad
              social, asegurando el cumplimiento en tiempo y forma
            </li>
            <li>
              Modificación de Datos: actualización de la información de los
              empleados en caso de cambios, como cambio de domicilio, estado
              civil, entre otros.
            </li>
            <li>
              Bajas de Empleados: gestión de la desvinculación del personal,
              cumpliendo con los requisitos legales.
            </li>
          </ul>

          <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
            Organización de Legajos de Personal
          </h3>
          <p className="w-[70%] pt-[10px] font-medium">
            Ayudamos a organizar y mantener al día la documentación laboral de los empleados, 
            garantizando que todos los registros estén en orden y cumplan con las exigencias legales. 
            Nos encargamos de:
          </p>
          <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
            <li>
              Elaboración y actualización de legajos.
            </li>
            <li>
             Gestión y almacenamiento de contratos, certificados, y documentos de relevancia para cada empleado.
            </li>
          </ul>
      


          <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
            Trámites ante los Distintos Organismos
          </h3>
          <p className="w-[70%] pt-[10px] font-medium">
            Nos ocupamos de la realización de trámites laborales y previsionales ante los distintos organismos públicos, 
            incluyendo AFIP, ANSES, sindicatos y aseguradoras de riesgos de trabajo (ART). 
            Este servicio asegura que todos los procesos se realicen de forma correcta y dentro de los plazos estipulados.
            Liquidación de Sueldos, Indemnizaciones y Emisión de Recibos
            Brindamos un servicio completo de liquidación de sueldos e indemnizaciones:
          </p>
          <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
            <li>
                Liquidación de Sueldos: cálculo preciso de salarios, horas extras, 
                vacaciones, y otros conceptos, conforme a las normativas vigentes.
            </li>
            <li>
                 Indemnizaciones: cálculo de las indemnizaciones correspondientes en casos de despidos, renuncias, o 
                 acuerdos laborales.
            </li>
            <li>
              Emisión de Recibos de Sueldo: confección y emisión de recibos de sueldo, 
              cumpliendo con los requisitos legales.
            </li>
          </ul>



          <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                 Liquidación de Cargas Sociales, F931 y Boletas Sindicales         
          </h3>
          <p className="w-[70%] pt-[10px] font-medium">
             Nos encargamos de liquidar las cargas sociales correspondientes a los empleados, a
             segurando el cumplimiento en tiempo y forma:
          </p>
          <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
            <li>
                 F931: confección y presentación del formulario ante la AFIP para el pago de las cargas sociales..
            </li>
            <li>
                 Boletas Sindicales: emisión de boletas sindicales, garantizando el correcto aporte a los gremios correspondientes.
            </li>
          </ul>



          <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
            Libro de Sueldos Digital        
          </h3>
          <p className="w-[70%] pt-[10px] font-medium">
                Gestionamos el Libro de Sueldos Digital, obligatorio para muchas empresas, 
                donde registramos toda la información salarial de los empleados de forma electrónica. 
                Este servicio incluye:
          </p>
          <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
            <li>
               Carga de datos en el sistema.
            </li>
            <li>
               Presentación ante la AFIP y organismos correspondientes
            </li>
            <li>
               Asesoramiento para cumplir con la normativa vigente sobre digitalización de libros contables.
            </li>
          </ul>

          <ResumeServiceFooter
            text={
              "Atención Personalizada y Seguimiento Ofrecemos un servicio personalizado, adaptado a las necesidades específicas de cada empresa, asegurando el cumplimiento de todas las obligaciones laborales y previsionales de manera eficiente y sin contratiempos."
            }
          />
        </div>
      </Layout>
    );
}

export default LaboralProvisinal;