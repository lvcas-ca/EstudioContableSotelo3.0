import '../Home.css';
import QuienesSomos from '../components/QuienesSomos';
import { Header } from '../components/Header';

function Home () {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
           <QuienesSomos/>
        </main>
      
          
        </>
      )
}

export default Home;