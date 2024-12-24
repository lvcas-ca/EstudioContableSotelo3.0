import { NavBar } from "../components/NavBar/NavBar";
import Layout from "../components/Layout/Layout";
import { HeroOfEachService } from "./components/HeroOfEachService";
import { ResumeServiceFooter } from "./components/ResumeServiceFooter";




function InfoCripto(){
    return(
        <>
        
        <Layout>
                
                  <div className='flex justify-center items-start flex-col px-[10px] md:px-[100px] h-[300px]'  style={{ backgroundImage: `url(https://res.cloudinary.com/dgtfypija/image/upload/v1734897661/Esstudio%20Contable%20web/infocripto-min_cxcugg.png)` }}>
                    <h1 className='text-blacks font-Outfit font-bold text-[40px] md:text-[50px]'>Info Criptomonedas</h1>
                  </div>
                  
                  <div className="w-[100%] md:w-[70%] px-[10px] md:px-[100px] pt-[50px]">
                  <h2 className="text-white text-[40px] font-semibold leading-9 font-Outfit">
                  ¿QUÉ SON LAS CRIPTOMONEDAS?
                  </h2>
                  <p className="pt-[20px] font-medium">
                    Una criptomoneda es un activo digital que emplea un cifrado criptográfico para garantizar su
                    titularidad y asegurar la integridad de las transacciones. 
                    Estas monedas no existen de forma física: se almacenan en una cartera digital. 
                    Cuentan con diversas características diferenciadoras respecto a los sistemas tradicionales: no están reguladas ni controladas por ninguna institución y no requieren de intermediaros en las transacciones. Se usa una base de datos descentralizada, blockchain o registro contable compartido, para el control de estas transacciones. Como no están disponibles de forma física, hay que recurrir a un servicio de monedero digital: billeteras electrónicas o wallets.
                  </p>
              

                  <h3 className="text-white text-[25px] font-semibold leading-7">
                    QUÉ ES UNA BILLETERA VIRTUAL
                  </h3>

                  <p className="pt-[20px] font-medium">
                    Un monedero digital o wallet es una aplicación donde es posible almacenar, 
                    enviar y recibir criptomonedas. Lo cierto es que a diferencia de un monedero de 
                    dinero físico, lo que realmente se almacena son las claves que nos dan la propiedad y 
                    derecho sobre las criptomonedas, y nos permiten operar con ellas.
                  </p>
                  

                  <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                  TECNOLOGÍA BLOCKCHAIN
                  </h3>
                  <p className="pt-[10px] font-medium">
                    Las criptomonedas funcionan mediante el registro contable compartido o blockchain.
                    Esta tecnología les aporta un elevado sistema de seguridad con capacidad para evitar 
                    que un mismo activo digital se pueda transferir en dos ocasiones o que sea falsificado. 
                    La tecnología blockchain funciona como un gran libro de contabilidad donde se pueden registrar y almacenar cantidades de información. Toda ella está compartida en la red y protegida de tal forma que todos los datos que alberga no se pueden alterar ni eliminar.
                  </p>
                

                  <h3 className="text-white text-[25px] font-semibold leading-7 pt-[20px]">
                    QUÉ ES UN BITCOIN
                  </h3>
                  <p className="pt-[10px] font-medium">
                        Bitcoin es el nombre que recibió la primera criptomoneda. Data del año 2009 y
                      nació de la mano de una persona o grupo de personas que se hicieron llamar 
                      Satoshi Nakamoto, quienes lograron crear el bitcoin bajo la tecnología blockchain, que ellos mismos inventaron.
                  </p>
                

                  <ResumeServiceFooter
                    text={"En Estudio Contable Sotelo brindamos asesoramiento impositivo referente a operaciones virtuales, exchanges de criptomonedas y utilización de plataformas de pago online. Recientemente se ha incrementado la utilización de activos digitales como contraprestación por servicios destinados al exterior o publicidad virtual. Por otra parte, se ha convertido en un innovador medio de inversión. En consecuencia, es importante contar con un asesoramiento específico sobre la aplicación de la normativa del sistema tributario argentino referente al tema. (*) (*) No es un consejo financiero. Crear un subtitulo luego de 'CRIPTOMONEDAS'."}
                  />

                 

                
                  
                  </div>  
            

        </Layout>
        
        </>
        
    )
}

export default InfoCripto;