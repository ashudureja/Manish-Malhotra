import React from "react";
import {motion} from "framer-motion"

const CustomCursor = ({pos}) => {
  return (
    <motion.div
      className="absolute h-20 w-20 text-white text-sm font-medium 
            rounded-full flex justify-center items-center 
            bg-black/20 backdrop-blur-[20px] shadow-xl
            pointer-events-none border border-white/10"
      style={{
        left: pos.x + 30,
        top: pos.y + 30,
        position: "fixed",
      }}
      animate={{
        x: "-50%",
        y: "-50%",
        scale: [1, 1.1, 1],
        opacity: [0, 1],
      }}
      
    >
      View
    </motion.div>
  );
};

export default CustomCursor;
