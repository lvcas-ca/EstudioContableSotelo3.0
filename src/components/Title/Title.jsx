export const Title = ({titulo, descripcion}) =>{
    return(
        <>
        <div className="text-center  pt-[70px] lg:pt-[100px] flex justify-center flex-col items-center">
            <h1 className="font-Sarabun font-semibold text-customBlack text-2xl text-[40px] md:text-[55px] lg:text-[60px]  text-black">
              {titulo}
            </h1>

            <p className="font-Epilogue text-customBlack text-black pt-5 lg:w-[550px] leading-[20px]">{descripcion}</p>   
        </div>
      
        </>
    )
}