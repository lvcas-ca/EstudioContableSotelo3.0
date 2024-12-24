
import { NavBar } from '../components/NavBar/NavBar';
import { Contacto } from '../components/Contacto/Contacto';
import { Footer } from '../components/Footer/Footer';
import ScrollToTop from '../components/utilities/ScrollToTop';


export const OnlyContact = () => {
  return (
    <div className='bg-[#06080F]'>
     <ScrollToTop/>
     <NavBar/>  
     <Contacto/>
     <Footer/>

    </div>
  )
}
