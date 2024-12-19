import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";

function AdminConsorcios() {
  return (
    <Layout>
      <HeroOfEachService
        title={"Administración de Consorcios"}
        LinkServiceToBreadcrumb={"AdminConsorcios"}
        urlBgImage={
          "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
        }
      />

      <div className="px-[10px] md:px-[100px] pt-[50px]">
        <h2 className="text-white text-[40px] font-semibold leading-9 font-Outfit">
          Administración de Consorcios
        </h2>
        <p className="w-[70%] pt-[20px] font-medium">
           En nuestro estudio contable, ofrecemos un servicio profesional y transparente para la administración de consorcios, 
           asegurando el cumplimiento de todas las obligaciones legales y la eficiente gestión de los 
           recursos del edificio. Nuestros servicios incluyen::
        </p>
        <img
          className="py-[20px]"
          src="https://res.cloudinary.com/dgtfypija/image/upload/v1734496955/Esstudio%20Contable%20web/cnsorcio_zqk40s.png"
          width={500}
          alt="Calculadora"
        />

        <h3 className="text-white text-[25px] font-semibold leading-7">
           Administración y Conservación del Inmueble
        </h3>

        <p className="w-[70%] pt-[20px] font-medium">
          Nos encargamos de la administración integral del consorcio,
          enfocándonos en el mantenimiento y conservación de las instalaciones::
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[20px] font-medium">
          <li>
            Coordinación de tareas de mantenimiento preventivo y correctivo
          </li>
          <li>
            Contratación y supervisión de proveedores y personal de servicio
          </li>
          <li>
            Asesoramiento en la planificación de obras y mejoras del inmueble
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Gestión de Fondos y Rendición de Cuentas
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
          Brindamos una gestión transparente de los fondos del consorcio, garantizando un manejo 
          eficiente y documentado de los recursos:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
          Administración de ingresos y egresos del consorcio.
          </li>
          <li>Presentación de rendiciones de cuentas periódicas a los propietarios.</li>
          <li>
           Optimización del presupuesto del consorcio para mantener la estabilidad financiera
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
         Información Contable Conforme a la Ley
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
         Garantizamos la preparación y presentación de información contable cumpliendo con la normativa vigente:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
            Confección de informes contables claros y detallados.
          </li>
          <li>
             Documentación de los movimientos financieros para asegurar la transparencia en la gestión.
          </li>
          
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
           Liquidación Mensual Conforme a la Ley 
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
         Realizamos la liquidación mensual de expensas, incorporando toda la información contable obligatoria:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
            Detalle de los ingresos y gastos del período.
          </li>
          <li>
            Cálculo preciso de las expensas ordinarias y extraordinarias.
          </li>
          <li>
            Emisión de liquidaciones claras y accesibles para los propietarios.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Convocatoria de Asambleas
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
         Organizamos y gestionamos la convocatoria de asambleas ordinarias y extraordinarias:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
           Preparación y envío de la citación correspondiente a los propietarios.
          </li>
          <li>
           Asesoramiento en la organización y desarrollo de las asambleas.
          </li>
          <li>
           Registro de las decisiones tomadas y elaboración de actas.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
         Seguimiento del Cobro de Expensas
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
         Realizamos un seguimiento activo para asegurar el cobro puntual de las expensas:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>Control de pagos y generación de avisos de deuda.</li>
          <li>Implementación de estrategias para reducir la morosidad en el consorcio.</li>
          <li>
           Coordinación con profesionales legales en caso de ser necesario.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Custodia de Libros y Documentos del Consorcio
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
          Nos ocupamos de la correcta custodia y mantenimiento de la documentación del consorcio:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
            Conservación de libros de actas, registros contables y otros documentos obligatorios.
          </li>
          <li>
            Organización y actualización periódica de los archivos del consorcio.
          </li>
          <li>
            Presentación de documentación a pedido de los propietarios o en inspecciones.
          </li>
        </ul>

        <ResumeServiceFooter
          text={
            "Entendemos que cada consorcio tiene sus particularidades. Por eso, brindamos una administración personalizada, garantizando una gestión eficiente, transparente y ajustada a las necesidades de cada edificio."
          }
        />
      </div>
    </Layout>
  );
}

export default AdminConsorcios;
