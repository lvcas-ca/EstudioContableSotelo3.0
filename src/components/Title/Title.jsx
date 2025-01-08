import { motion } from "framer-motion";

export const Title = ({ titulo, descripcion, colorTxt }) => {
  return (
    <>
      <motion.div
        className="text-center pt-[70px] lg:pt-[100px] flex justify-center flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className={`font-Khand font-bold text-2xl text-[50px] lg:text-[70px] pb-[10px] leading-[50px] ${colorTxt}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          {titulo}
        </motion.h1>
        <motion.p
          className={`font-Epilogue font-medium text-[12px] md:text-[15px] leading-tight ${colorTxt} pt-5 lg:w-[550px] leading-[20px] uppercase`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}


        >
          {descripcion}
        </motion.p>
      </motion.div>
    </>
  );
};
