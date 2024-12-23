import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Accede a la ruta actual

  useEffect(() => {
    console.log("Ruta actual:", pathname); // Para confirmar los cambios
    window.scrollTo(0, 0); // Mueve el scroll al inicio
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;
