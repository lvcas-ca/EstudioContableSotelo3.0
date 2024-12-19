
import { NavBar } from '../components/NavBar/NavBar';
import { Contacto } from '../components/Contacto/Contacto';
import { Footer } from '../components/Footer/Footer';


export const OnlyContact = () => {
  return (
    <div className='bg-[#06080F]'>
     <NavBar/>  
     <Contacto/>
     <Footer/>

    </div>
  )
}
