
import Ws from '/src/assets/wsbtn.png';

export const WsButton = () => {
  return (
    <div className='fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg w-[60px]'>
       
        <a href="https://api.whatsapp.com/send?phone=541124556881&amp;text=Hola!" target="_blank"> <img src={Ws} alt="WhatsApp Web"/></a>
    </div>
  )
}
