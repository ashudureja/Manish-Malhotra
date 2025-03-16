import React from 'react'
import { motion } from "framer-motion";
const Animatedpara = ({ text, className }) => {
    return (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          className={className}
        >
          {text}
        </motion.p>
      );
}

export default Animatedpara
