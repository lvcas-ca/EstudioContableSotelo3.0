export const Title = ({ titulo, descripcion, colorTxt }) => {
    return (
        <>
            <div className="text-center pt-[70px] lg:pt-[100px] flex justify-center flex-col items-center">
                <h1 className={`font-Khand font-bold text-2xl text-[50px] lg:text-[70px] pb-[10px] leading-[50px] ${colorTxt}`}>
                    {titulo}
                </h1>
                <p className={`font-Epilogue font-medium text-[12px] md:text-[15px] leading-tight ${colorTxt} pt-5 lg:w-[550px] leading-[20px] uppercase`}>
                    {descripcion}
                </p>
            </div>
        </>
    );
}