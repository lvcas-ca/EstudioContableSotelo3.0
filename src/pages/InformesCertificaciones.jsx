import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";





function InformesCertificaciones(){
    return(
      <Layout>
         <HeroOfEachService
          title={"Informes y Certificaciones"}
          LinkServiceToBreadcrumb={"InformesCertificaciones"}
          urlBgImage={
          "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
          }
        />    

    <div className="w-[100%] md:w-[70%] px-[10px] md:px-[100px] pt-[50px]">
      <h2 className="text-white text-[40px] font-semibold leading-9 font-Outfit">
        Informes y Certificaciones
      </h2>
      <p className="pt-[20px] font-medium">
        En nuestro estudio contable ofrecemos servicios especializados en la emisión de informes y
        certificaciones contables, brindando respaldo y validez legal a la documentación requerida
        tanto a nivel nacional como internacional. Nuestros servicios incluyen:
      </p>
      <img
        className="py-[20px]"
        src="https://res.cloudinary.com/dgtfypija/image/upload/v1734497842/Esstudio%20Contable%20web/informes_lb9qza.png"
        width={500}
        alt="Calculadora"
      />

      <h3 className="text-white text-[25px] font-semibold leading-7">
        Certificación de Origen Lícito de Fondos
      </h3>

      <p className="pt-[20px] font-medium">
        Emitimos certificaciones que acreditan el origen lícito de fondos, 
        requisito fundamental en operaciones de compra de bienes, inversiones o transacciones 
        financieras:
      </p>
      <ul className="list-disc ml-5 pt-[20px] font-medium">
        <li>
        Análisis detallado de la documentación respaldatoria.
        </li>
        <li>
         Preparación del informe conforme a las normativas vigentes.
        </li>
        <li>
        Asesoramiento en los requerimientos específicos para entidades financieras o notariales.
        </li>
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
       Certificación de Ingresos Personales
      </h3>
      <p className="pt-[10px] font-medium">
        Elaboramos certificaciones que validan los ingresos personales 
        de manera formal y profesional, necesarias para:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
        Solicitudes de créditos bancarios o hipotecarios.
        </li>
        <li>
        Alquileres de propiedades y otros trámites que requieren respaldo de ingresos.
        </li>
        <li>
         Presentaciones ante entidades públicas o privadas.
        </li>
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
       Manifestación de Bienes
      </h3>
      <p className="pt-[10px] font-medium">
        Realizamos informes detallados sobre el patrimonio personal o empresarial, que incluyen:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
        Declaración de activos y bienes muebles e inmuebles.
        </li>
        <li>
        Valoración del patrimonio conforme a las normativas fiscales y contables vigentes.
        </li>
        <li>
        Documentación necesaria para trámites judiciales, notariales o impositivos.
        </li>
        
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
        Certificación de Ingresos y Gastos
      </h3>
      <p className="pt-[10px] font-medium">
        Brindamos certificaciones que detallan y validan los ingresos y gastos de personas físicas o jurídicas:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
         Elaboración de informes claros y precisos para presentar ante organismos fiscales,
        instituciones financieras o terceros.
        </li>
        <li>
        Registro y análisis de movimientos económicos respaldados con documentación contable.
        </li>
       
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
        Informes de Cumplimiento
      </h3>
      <p className="pt-[10px] font-medium">
        Elaboramos informes de cumplimiento para acreditar el adecuado cumplimiento de 
        obligaciones fiscales, contables o contractuales:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
         Verificación y control del cumplimiento de pagos impositivos y normativas contables.
        </li>
        <li>
        Informes requeridos por organismos reguladores, empresas o entidades públicas.
        </li>
      
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
       Certificación de Pagos Sujetos del Exterior
      </h3>
      <p className="pt-[10px] font-medium">
         Realizamos la certificación de pagos realizados o recibidos del exterior,
        cumpliendo con las normativas cambiarias y fiscales argentinas:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>Análisis de documentación que respalda operaciones internacionales.</li>
        <li>Emisión de informes para presentar ante AFIP, bancos u organismos de control.</li>
        <li>
         Asesoramiento en cuestiones impositivas relacionadas con operaciones del exterior.
        </li>
      </ul>

      <ResumeServiceFooter
        text={
        "Ofrecemos un servicio profesional, con estrictos estándares de confidencialidad y atención personalizada, adaptándonos a las necesidades particulares de cada cliente para asegurar informes y certificaciones de alta calidad y validez legal."
        }
      />
    </div>                  

      </Layout>
       
    )
}

export default InformesCertificaciones;