import { Form } from "./Form/Form"
import img1 from '/src/assets/call.png';
import img2 from '/src/assets/Symbol.png';
import facebook from '/src/assets/facebok.png';
import instagram from '/src/assets/insta.png';

import ContactoCss from "../Contacto/Contacto.module.scss";

export const Contacto = () =>{

    return(
        <>
        <section id="contacto" className={ContactoCss.contact__container}>
          <div className={ContactoCss.contact__container__text}>
            <p>Podemos asesorarte en lo que necesites.</p>
            <span>
              Por favor complete el formulario para que podamos brindarle una respuesta 
              acorde a lo que necesita. Una vez procesados los datos, un profesional se prondrá 
              en contacto.
            </span>

            <hr />

            <div className={ContactoCss.contact__container__text__call}>
              <div className={ContactoCss.contact__container__text__call__icon1}>
                <img src={img1} alt="" />
                <span>1124635748</span>
              </div>

              <div className={ContactoCss.contact__container__text__call__icon1}>
                <img src={img2} alt="" />
                <span>marisasotelo.ms@gmail.com</span>
              </div>

              <div className={ContactoCss.contact__container__text__call__icon1}>
                <img src={img2} alt="" />
                <span>estudiocontablesotelo1979@gmail.com</span>
              </div>

            </div>

            <div className={ContactoCss.contact__container__text__redes}>
              <a href="https://www.facebook.com/people/Estudio-Contable-Sotelo/100084190453606/" target="_blank"><img src={facebook} alt="facebok link" /></a>
              <a href="https://www.instagram.com/estudiocontablesotelo/" target="_blank"><img src={instagram} alt="Instagram" /></a>   
                  
            </div>

          </div>
          <Form/>
        </section>
          
        </>
    )

}