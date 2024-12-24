
import {  Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";



export const StickyContact = () => {




  return (
    <div className='rounded-md  bg-custom-gradient flex flex-col items-center justify-center gap-[10px] w-[250px] h-[150px] fixed top-[120px] right-[50px] invisible md:invisible lg:visible'>
        <p className='font-bold font-Epilogue text-zinc-950'>¿Alguna consulta?</p>
        <Link className='font-Epilogue font-bold px-4 py-3 rounded-lg bg-[#1a1a1a] ' to="/OnlyContact">HABLEMOS</Link>
        <ScrollToTop/>
    </div>
  )
}
