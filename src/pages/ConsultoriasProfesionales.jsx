import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";
import Layout from "../components/Layout/Layout";

function ConsultoriasProfesionales() {
  return (
    <Layout>
      <HeroOfEachService
        title={"Consultoría Empresarial"}
        LinkServiceToBreadcrumb={"ConsultoriasProfesionales"}
        urlBgImage={
          "https://res.cloudinary.com/dgtfypija/image/upload/v1734218357/Esstudio%20Contable%20web/back-service_zvxydy.png"
        }
      />

      <div className="px-[10px] md:px-[100px] pt-[50px] font-Outfit font-bold">
        <img
          className="py-[20px]"
          src="https://res.cloudinary.com/dgtfypija/image/upload/v1734499067/Esstudio%20Contable%20web/consultria_hkwchv.png"
          width={500}
          alt="Calculadora"
        />

        <h3 className="text-white text-[25px] font-semibold leading-7">
          Diagnóstico de Administraciones Disfuncionales
        </h3>

        <p className="w-[100%] md:w-[70%]  pt-[20px] font-medium">
          En Estudio Contable Sotelo identificamos y abordamos los problemas que
          afectan la productividad y organización de las empresas. Una
          administración disfuncional puede generar costos ocultos, reducir la
          eficiencia y comprometer el crecimiento de una organización.
        </p>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Síntomas frecuentes de una administración disfuncional
        </h3>

        <ol className="list-decimal ml-5 w-[70%] pt-[20px] font-medium">
          <li>
            <strong className="text-[18px]">
              Falta de claridad en la estructura jerárquica
            </strong>
            <br></br>
            La ausencia de roles y responsabilidades bien definidos genera
            confusión, ralentiza la toma de decisiones y dificulta la asignación
            adecuada de tareas. Esto impacta negativamente en la productividad y
            cohesión del equipo.
          </li>
          <li>
            <strong className="text-[18px]">
              Ineficiencia en los procesos administrativos
            </strong>
            <br></br>
            Procedimientos poco claros o sistemas obsoletos provocan duplicación
            de tareas, tiempos prolongados para actividades clave y desperdicio
            de recursos. Esto reduce la eficiencia operativa y aumenta costos
            innecesarios.
          </li>
          <li>
            <strong className="text-[18px]">
              Necesidad de formación acorde a los roles y tecnologías utilizadas
            </strong>
            <br></br>
            La insuficiente capacitación en nuevas herramientas y tecnologías
            limita la adaptación a los cambios del mercado, reduciendo el
            desempeño de los empleados y afectando directamente los resultados
            organizacionales.
          </li>
        </ol>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Nuestro enfoque
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
          Detectamos las áreas de mejora y proponemos soluciones estratégicas
          que permiten optimizar la organización, mejorar la toma de decisiones
          y garantizar la sostenibilidad de las empresas. ¡Contáctanos para
          transformar los desafíos en oportunidades de crecimiento!
        </p>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Análisis de Flexibilidad Organizacional
        </h3>

        <p className="w-[70%] pt-[10px] font-medium">
          Evaluamos la capacidad de la empresa para adaptarse a cambios internos
          y externos, identificando áreas de mejora clave y optimizando
          procesos:
        </p>

        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
            Diagnóstico de resiliencia frente a imprevistos y cambios del
            mercado.
          </li>
          <li>
            Identificación y eliminación de cuellos de botella en procesos
            críticos.
          </li>
          <li>
            Asesoramiento para la toma de decisiones en situaciones de alta
            complejidad.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Desarrollo de Soluciones Personalizadas
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
            Diseñamos estrategias adaptadas a las necesidades y objetivos específicos de cada cliente,
             fomentando la eficiencia y el crecimiento sostenible:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
           Optimización de flujos de trabajo y mejora en la asignación de recursos.
          </li>
          <li>
            Implementación de herramientas tecnológicas modernas para procesos administrativos.
          </li>
          <li>
           Creación de planes de acción concretos y metas alcanzables.
          </li>
        </ul>

        <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
          Acompañamiento Profesional Continuo
        </h3>
        <p className="w-[70%] pt-[10px] font-medium">
           Brindamos apoyo integral en todo el proceso, desde el análisis hasta la 
           implementación de soluciones, asegurando un enfoque estratégico:
        </p>
        <ul className="list-disc ml-5 w-[70%] pt-[10px] font-medium">
          <li>
           Sesiones de consultoría online o presencial, según las necesidades del cliente.
          </li>
          <li>
            Supervisión de avances y ajustes en tiempo real para garantizar resultados.
          </li>
          <li>
            Asistencia constante para resolver desafíos y mantener la competitividad empresarial.
          </li>
        </ul>



   

        <ResumeServiceFooter

          text={
            "Brindamos un servicio profesional y a medida, diseñado para satisfacer las necesidades específicas de cada cliente, garantizando soluciones eficientes y el cumplimiento riguroso de las normativas fiscales y legales vigentes."
          }

          parrafo={"Compromiso con el Éxito Empresarial"}

          footer={"¡Contáctanos y lleva tu empresa al siguiente nivel!"}
        />
      </div>
    </Layout>
  );
}

export default ConsultoriasProfesionales;
