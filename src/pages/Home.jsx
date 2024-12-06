import '../Home.css';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';
import { Header } from '../components/Header';
import { Servicios } from '../components/Servicios/Servicios';
import { Contacto } from '../components/Contacto/Contacto';

function Home () {
    return (
        <>
        <header >
            <Header/>
        </header>
        <main >
           <div className='px-[10px] md:px-[150px]'>
             <Servicios/> 
           </div>
           
             <Contacto/> 
              <div className='px-[10px] md:px-[150px] bg-[#1C1D20]'>
                 <QuienesSomos/>   
              </div>
             
           
          
        </main>
      
          
        </>
      )
}

export default Home;