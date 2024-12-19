import { NavBar } from '../components/NavBar/NavBar';
import { Servicios } from '../components/Servicios/Servicios';
import { Contacto } from '../components/Contacto/Contacto';
import { Footer } from '../components/Footer/Footer';
import '../Home.css';

function ServiciosPage(){
    return(
        <>
          <NavBar/>
          <div className='px-[10px] md:px-[150px]'>
             <Servicios/> 
           </div>

           <Contacto/> 

           <div className='px-[10px] md:px-[30px] lg:px-[150px] bg-bgColorFooter'>
             <Footer/>
           </div>


          
        </>
       
    )
}

export default ServiciosPage;