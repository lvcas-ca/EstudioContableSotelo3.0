import QuienesCss from "../QuienesSomos/Quienes.module.scss";
import unicon from "/src/assets/uni-icon.png";
import idea from "/src/assets/idea.png";
import hand from "/src/assets/hand.png";
import rocket from "/src/assets/rocket.png";

function QuienesSomos() {
  return (
    <section id="about" className="bg-[black]">
      <h2>Quienes Somos</h2>
      <div className={QuienesCss.quienes_container}>
        <img
          src="https://res.cloudinary.com/dgtfypija/image/upload/v1733458923/Esstudio%20Contable%20web/universidad-sm_qqnzdt.png"
          alt="Universidad"
        />
        <div className={QuienesCss.quienes_container__text1}>
          <h3>Conocimiento y Liderazgo</h3>
          <p>
            AL FRENTE DEL ESTUDIO CONTABLE SOTELO SE ENCUENTRA LA DRA. MARISA
            PAOLA SOTELO. CONTADORA PÚBLICA NACIONAL EGRESADA DE LA UNIVERSIDAD
            NACIONAL DE GRAL. SAN MARTÍN, MATRICULADA EN EL CONSEJO PROFESIONAL
            DE CIENCIAS ECONÓMICAS DE LA CIUDAD AUTÓNOMA DE BUENOS AIRES Y EN EL
            CONSEJO PROFESIONAL DE CIENCIAS ECONÓMICAS DE LA PROVINCIA DE BUENOS
            AIRES.
          </p>

          <div className={QuienesCss.quienes_container__subtext1}>
            <img src={unicon} alt="Uni" />
            <div>
              <span>Formación Académica de Excelencia</span>
              <p>
                Su sólida formación profesional garantiza un profundo
                conocimiento en materia contable y fiscal, asegurando soluciones
                precisas y adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </div>

          <div className={QuienesCss.quienes_container__subtext1}>
            <img src={hand} alt="Mano" />
            <div>
              <span>Formación Académica de Excelencia</span>
              <p>
                Su sólida formación profesional garantiza un profundo
                conocimiento en materia contable y fiscal, asegurando soluciones
                precisas y adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </div>
        </div>

       
        <div className={QuienesCss.quienes_container__text1}>
          <h3>Asesoramiento Integral para el Crecimiento Empresarial</h3>
          <p>
            EN NUESTRO ESTUDIO CONTABLE BRINDAMOS ASESORAMIENTO INTEGRAL Y ASISTENCIA CONTABLE E 
            IMPOSITIVA PERMANENTE A EMPRESAS UNIPERSONALES Y PYMES, CUBRIENDO TODAS LAS ETAPAS DE 
            SU VIDA COMERCIAL.
          </p>

          <div className={QuienesCss.quienes_container__subtext1}>
            <img src={idea} alt="Universidad San Martin" />
            <div>
              <span>Soluciones Personalizadas</span>
              <p>
                Con profesionalismo, resolvemos los aspectos clave relacionados con las necesidades y 
                expectativas de nuestros clientes, ofreciendo respuestas adaptadas a su problemática
                específica.
              </p>
            </div>
          </div>

          <div className={QuienesCss.quienes_container__subtext1}>
            <img src={rocket} alt="Rocket" />
            <div>
              <span>Impulsamos el Desarrollo de tu Empresa</span>
              <p>
                Realizamos un análisis completo de las posibles alternativas para colaborar en el desarrollo
                y crecimiento de las empresas, garantizando un enfoque estratégico y eficiente.
              </p>
            </div>
          </div>
        </div>
        
        <img
          src="https://res.cloudinary.com/dgtfypija/image/upload/f_auto,q_auto/v1/Esstudio%20Contable%20web/bf9bmkgacvof44rhdbu1"
          alt="Universidad"
        />
      </div>

    </section>
  );
}

export default QuienesSomos;
