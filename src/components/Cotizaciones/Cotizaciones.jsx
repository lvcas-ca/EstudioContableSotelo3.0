import { useState, useEffect } from "react";
import contizacionesCss from "../Cotizaciones/Cotizaciones.module.css";

export const Cotizaciones = () => {
  const URL_DOLAR = "https://dolarapi.com/v1/dolares";

  const [dolar, setDolar] = useState([]);

  useEffect(() => {
    fetch(URL_DOLAR)
      .then((data) => data.json())
      .then((json) => setDolar(json))

      //.then(json => console.log(json))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <>
      <div className={contizacionesCss.dolarContainer}>
        {dolar.map((d) => (
          <div className={contizacionesCss.dolarList} key={d.casa}>
            <ul>
              <li>
              <span className={contizacionesCss.dolarSpan}>
                  <strong>USD {d.nombre}:</strong> ${d.compra}
                </span>
              </li>
            </ul>
          </div>
           
        ))}

       {dolar.map((d) => (
          <div className={contizacionesCss.dolarList} key={d.casa}>
            <ul>
              <li>
                <span className={contizacionesCss.dolarSpan}>
                  <strong>USD {d.nombre}:</strong> ${d.compra}
                </span>
              </li>
            </ul>
          </div>
           
        ))}
      </div>
    </>
  );
};
