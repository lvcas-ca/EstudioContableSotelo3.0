
import "../Home.css";
import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";

function PequeñosContribuyentes() {
  return (
    <Layout>
      <HeroOfEachService
      title={"Pequeños Contribuyentes"}
      LinkServiceToBreadcrumb={"PequeñosContribuyentes"}
      urlBgImage={
        "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
      }
      />

      <div className="w-[100%] md:w-[70%] px-[10px] md:px-[100px] pt-[50px]">
      <h2 className="text-white text-[40px] font-semibold leading-9 font-Outfit">
        Pequeños contribuyentes
      </h2>
      <p className="pt-[20px] font-medium">
        Nuestro estudio contable ofrece asesoramiento y gestión integral para
        Pequeños Contribuyentes, brindando soluciones eficientes para cumplir
        con las obligaciones fiscales y optimizar tus impuestos. Entre los
        principales servicios que ofrecemos se encuentran:
      </p>
      <img
        className="py-[20px]"
        src="https://res.cloudinary.com/dgtfypija/image/upload/v1734280018/Esstudio%20Contable%20web/Calculadora_pat7xr.png"
        width={500}
        alt="Calculadora"
      />

      <h3 className="text-white text-[25px] font-semibold leading-7">
        Régimen Simplificado para Pequeños Contribuyentes (Monotributo)
      </h3>

      <p className="pt-[20px] font-medium">
        Te ayudamos a inscribirte en el régimen de Monotributo, una opción
        fiscal simple para emprendedores y pequeños negocios que permite
        combinar el pago de impuestos y aportes jubilatorios en una sola cuota
        mensual. Nuestros servicios incluyen:
      </p>
      <ul className="list-disc ml-5 pt-[20px] font-medium">
        <li>Alta, modificación y baja en el Monotributo.</li>
        <li>Recategorización trimestral, según tus ingresos y actividad.</li>
        <li>
        Asesoramiento para aprovechar al máximo los beneficios del
        Monotributo.
        </li>
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
        Alta/Baja de Impuestos Nacionales, Provinciales y Municipales
      </h3>
      <p className="pt-[10px] font-medium">
        Nos encargamos de todo el proceso de alta y baja de impuestos en los
        distintos niveles:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>Impuestos Nacionales: como IVA, Ganancias, entre otros.</li>
        <li>
        Impuestos Provinciales: alta y baja en Ingresos Brutos según la
        jurisdicción.
        </li>
        <li>
        Impuestos Municipales: habilitaciones comerciales, derechos de
        publicidad y tasas municipales.
        </li>
      </ul>

      <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
        Impuesto a las Ganancias y Bienes Personales
      </h3>
      <p className="pt-[10px] font-medium">
        Ofrecemos asesoramiento especializado en la liquidación de estos
        impuestos para pequeños contribuyentes:
      </p>
      <ul className="list-disc ml-5 pt-[10px] font-medium">
        <li>
        Impuesto a las Ganancias: cálculo y presentación de declaraciones
        juradas, optimizando las deducciones permitidas por ley.
        </li>
        <li>
        Bienes Personales: asesoramiento en la valuación de activos y
        presentación de la declaración.
        </li>
      </ul>

      <ResumeServiceFooter
        text={
        "Cada pequeño contribuyente tiene sus particularidades, por lo que brindamos un servicio personalizado. Evaluamos tu situación para ofrecerte la solución más adecuada y asegurarte de que cumplas con todas tus obligaciones fiscales sin complicaciones."
        }
      />
      </div>
    </Layout>
    );
}

export default PequeñosContribuyentes;
