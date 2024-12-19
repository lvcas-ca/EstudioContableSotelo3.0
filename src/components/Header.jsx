
import HeaderCss from "./Header.module.css"
import TextSlider from "./TextSlider/TextSlider.tsx";
import { NavBar } from "./NavBar/NavBar.jsx";
import { Cotizaciones } from "./Cotizaciones/Cotizaciones.jsx";

export const Header = () => {


  return (
    <>
     
    

      <NavBar />

      <Cotizaciones/>
     
      <section className={HeaderCss.hero}>
        <h1>Dra. Maria Paola Sotelo</h1>
        <p>
          Contadora Pública Nacional. Tº436 Fº144 // T°183 F°78. Licenciada en
          Administración y Gestión Empresarial. Tº54 Fº38 // T°1 F°100. Técnica
          en Comercialización, Especialista en PYMES, Perito Auxiliar de
          Justicia.
        </p>
        <TextSlider words={["ESTUDIO CONTABLE SOTELO", "Pequeños contribuyentes", "Impuestos", "Laboral y previsional", "Sociedades", "Administración de consorcios", "Informes y certificaciones", "Servicios impositivos", "Consultorías profesionales"]} />
      </section>
    </>
  );
};
