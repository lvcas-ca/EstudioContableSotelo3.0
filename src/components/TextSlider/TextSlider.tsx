"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion";
import HeaderCss from "./Header.module.css";
 
export default function RotateWords({
  text = "",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string
  words: string[]
}) {
  const [index, setIndex] = React.useState(0)
 
React.useEffect(() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % words.length)
}, 5000)
// Clean up interval on unmount
return () => clearInterval(interval)
}, [])
return (
 
<button className="bg-custom-gradient text-[#242424] text-center font-bold tracking-tighter md:leading-[4rem] w-fit flex items-center justify-center mx-auto gap-1.5 py-2 px-4 rounded-lg">
  {text}{' '}
  <AnimatePresence mode="wait">
    <motion.p
      key={words[index]}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      style={{ scale: 2.5, letterSpacing:2, }}
      
    >
      {words[index]}
    </motion.p>
  </AnimatePresence>
</button>
) }