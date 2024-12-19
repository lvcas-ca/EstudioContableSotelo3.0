export const Title = ({titulo, descripcion}) =>{
    return(
        <>
        <div className="text-center  pt-[70px] lg:pt-[100px] flex justify-center flex-col items-center">
            <h1 className="font-Khand font-bold text-customBlack text-2xl text-[50px] lg:text-[70px]  text-black">
              {titulo}
            </h1>

            <p className="font-Epilogue font-medium text-[12px] md:text-[15px] leading-tight text-customBlack text-black pt-5 lg:w-[550px] leading-[20px] uppercase">{descripcion}</p>   
        </div>
      
        </>
    )
}