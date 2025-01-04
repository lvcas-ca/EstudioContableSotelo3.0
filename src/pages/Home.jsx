import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { Suspense } from "react";
import "../Home.css";
import QuienesSomos from "../components/QuienesSomos/QuienesSomos";
import { Header } from "../components/Header";
import { Servicios } from "../components/Servicios/Servicios";
import { Contacto } from "../components/Contacto/Contacto";
import { Footer } from "../components/Footer/Footer";
import MarcasQueTrabajanConNosotros from "../components/MarcasQueTrabajanConNosotros/MarcasQueTrabajanConNosotros";
import { Loading } from "../components/utilities/Loading";

function Home() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <header>
          <Header />
        </header>

        <main>
          <SpeedInsights />{" "}
          {/* Aquí se renderiza el componente para medir el rendimiento */}
          <Analytics />
          <div className="px-[10px] md:px-[150px]">
            <Servicios />
          </div>
          <Contacto />
          <div className="px-[10px] md:px-[150px] bg-[#1C1D20]">
            <QuienesSomos />
            <MarcasQueTrabajanConNosotros />
          </div>
        </main>
        <div className="px-[10px] md:px-[30px] lg:px-[150px] bg-bgColorFooter">
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default Home;
