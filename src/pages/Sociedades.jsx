

import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";

function Sociedades(){
    return(
       <Layout>
          <HeroOfEachService
                title={"Sociedades"}
                LinkServiceToBreadcrumb={"Sociedades"}
                urlBgImage={
                "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
                }
            />

            <div className="px-[10px] md:px-[100px] pt-[50px]">
                    <h2 className="text-white text-[40px] font-semibold leading-9 font-Outfit">
                    Sociedades
                    </h2>
                    <p className="w-[70%] pt-[20px] font-medium">
                    En nuestro estudio contable, ofrecemos un servicio completo para la constitución y gestión de sociedades 
                    en la Ciudad Autónoma de Buenos Aires (CABA) y en la provincia de Buenos Aires, asegurando el cumplimiento de 
                    todas las normativas legales y contables. Entre los servicios destacados se encuentran:
                    </p>
                    <img
                    className="py-[20px]"
                    src="https://res.cloudinary.com/dgtfypija/image/upload/v1734410242/Esstudio%20Contable%20web/sociedades_b5hzcr.png"
                    width={500}
                    alt="Calculadora"
                    />

                    <h3 className="text-white text-[25px] font-semibold leading-7">
                    Constitución de Sociedades en CABA y Provincia de Buenos Aires
                    </h3>

                    <p className="w-[70%] pt-[20px] font-medium">
                    Te asistimos en todo el proceso de constitución de sociedades, ya sea para crear una
                    Sociedad Anónima (S.A.), Sociedad de Responsabilidad Limitada (S.R.L.) u otras formas 
                    societarias:
                    </p>
                    <ul className="list-disc ml-5 w-[70%] pt-[20px] font-medium">
                    <li>Asesoramiento en la elección de la estructura societaria más adecuada según tus necesidades.</li>
                    <li>Redacción del estatuto social y elaboración de toda la documentación necesaria.</li>
                    <li>
                        Gestión de los trámites ante los organismos correspondientes hasta la inscripción definitiva.
                    </li>
                    </ul>

                    <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                    Trámites ante IGJ y DPPJ
                    </h3>
                    <p className="w-[70%] pt-[10px] font-medium">
                    Realizamos todos los trámites necesarios ante la Inspección General de Justicia (IGJ) 
                    en CABA y ante la Dirección Provincial de Personas Jurídicas (DPPJ) en la provincia de 
                    Buenos Aires. Nos ocupamos de:
                    </p>
                    <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
                    <li>Inscripción de sociedades, incluyendo modificaciones de estatutos.</li>
                    <li>
                        Aprobación de balances y presentación de documentación anual.
                    </li>
                    <li>
                        Gestión de trámites relacionados con transformaciones, fusiones o escisiones societarias.
                    </li>
                    </ul>


                    <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                    Inscripción y Cesación de Administradores
                    </h3>
                    <p className="w-[70%] pt-[10px] font-medium">
                    Nos encargamos de los trámites de inscripción de nuevos administradores o gerentes, así como de la cesación de aquellos que dejan sus funciones:
                    </p>
                    <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
                    <li>
                        Presentación de la documentación ante IGJ o DPPJ para registrar los cambios.
                    </li>
                    <li>
                        Asesoramiento en los requisitos legales para que el proceso se realice de manera adecuada.
                    </li>
                    <li>
                        Seguimiento del trámite hasta su inscripción definitiva.
                    </li>
                    </ul>



                    <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                    Rúbrica de Libros Contables
                    </h3>
                    <p className="w-[70%] pt-[10px] font-medium">
                        Ofrecemos asistencia en la rúbrica de los libros contables obligatorios, 
                        asegurando el cumplimiento con las normativas establecidas por la IGJ y DPPJ. Esto incluye:
                    </p>
                    <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
                    <li>
                        Libros Diarios y de Inventarios: necesarios para el correcto registro contable.
                    </li>
                    <li>
                        Indemnizaciones: cálculo de las indemnizaciones correspondientes en casos de despidos, renuncias, o acuerdos laborales.
                    </li>
                    <li>
                    Libros de Actas y de Registro de Accionistas: esenciales para documentar las decisiones tomadas por los órganos societarios.
                    </li>
                    </ul>



                    <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                    Asistencia en la Confección de Actas de Directorio y Asambleas
                    </h3>
                    <p className="w-[70%] pt-[10px] font-medium">
                    Brindamos asistencia en la elaboración de actas de reuniones de directorio y asambleas de accionistas, 
                    asegurando que las decisiones queden debidamente registradas conforme a la ley:
                    </p>
                    <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
                    <li>
                        Actas de Directorio: Asesoramiento para documentar correctamente las decisiones de la administración de la sociedad.
                    </li>
                    <li>
                        Actas de Asambleas: Redacción de actas de asambleas ordinarias y extraordinarias, asegurando el cumplimiento de los requisitos legales para su validez.
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
                    Presentación ante la AFIP y organismos correspondientes.
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
       
    )
}

export default Sociedades;