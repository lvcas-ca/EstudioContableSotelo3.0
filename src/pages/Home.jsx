import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';


import '../Home.css';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';
import { Header } from '../components/Header';
import { Servicios } from '../components/Servicios/Servicios';
import { Contacto } from '../components/Contacto/Contacto';
import { Footer } from '../components/Footer/Footer';



function Home () {
    return (
        <>
        <header >
            <Header/>
        </header>
        <main >
           <SpeedInsights /> {/* Aquí se renderiza el componente para medir el rendimiento */}
           <Analytics />
           <div className='px-[10px] md:px-[150px]'>
             <Servicios/> 
           </div>
           
             <Contacto/> 

              <div className='px-[10px] md:px-[150px] bg-[#1C1D20]'>
                 <QuienesSomos/>   
              </div>
             
           
          
        </main>
        <div className='px-[10px] md:px-[30px] lg:px-[150px] bg-bgColorFooter'>
          <Footer/>
        </div>
      
          
        </>
      )
}

export default Home;