import '../Home.css';
import QuienesSomos from '../components/QuienesSomos';
import { Header } from '../components/Header';
import { Servicios } from '../components/Servicios/Servicios';
import { Contacto } from '../components/Contacto/Contacto';

function Home () {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main className='px-[10px] md:px-[150px]'>

           <Servicios/>
           <Contacto/>
        </main>
      
          
        </>
      )
}

export default Home;