"use client";
 
import { motion } from "framer-motion";

const TextRevealOpacity = ({delay=0,children}) => {
  return (
    <motion.div
        initial={{ opacity: 0.0}}
        animate={{ opacity: 1}}
        transition={{
          delay: delay,
          duration: 0.6,
          ease: "easeInOut",
        }} className="flex flex-col">
{children}
        </motion.div>
  )
}

export default TextRevealOpacity