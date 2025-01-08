import { Cards } from "./Cards/Cards";
import { Title } from "../Title/Title";
import { motion } from "framer-motion";
export const Servicios = () => {
  return (
    <>
      <Title
        titulo={"SERVICIOS"}
        descripcion={
          "Nuestro Estudio Contable le ofrece asesoramiento y una amplia gama de servicios administrativos, contables y financieros."
        }
        colorTxt={"text-customBlack"}
      />

      <Cards />
    </>
  );
};
