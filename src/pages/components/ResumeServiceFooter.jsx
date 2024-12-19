

export const ResumeServiceFooter = ({text, parrafo, footer}) => {
  return (
    <section className="p-[30px] mt-[20px] font-Epilogue w-[100%] md:w-[50%] text-[16px] leading-7 font-bold bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dgtfypija/image/upload/v1734291977/Esstudio%20Contable%20web/resume_irbu4y.png')]">
      <p className="text-amber-300 text-[18px]">{parrafo}</p>
      <div>
          {text}
      </div> 
      <footer className="text-[18px]">
          {footer}
      </footer>
    </section>
    
  )
}
