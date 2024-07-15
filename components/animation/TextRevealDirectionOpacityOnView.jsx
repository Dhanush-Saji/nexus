"use client";
 
import { motion } from "framer-motion";

const TextRevealDirectionOpacityOnView = ({delay=0,direction='bt',children}) => {
  return (
    <motion.div
        initial={direction == 'bt'?{ opacity: 0.0, y: 15 }:direction == 'tb'?{ opacity: 0.0, y: -15 }:{}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay,
          duration: 0.6,
          ease: "easeInOut",
        }} className="flex flex-col">
{children}
        </motion.div>
  )
}

export default TextRevealDirectionOpacityOnView