import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCircle } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Button = ({text}) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer w-fit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex gap-1 items-center justify-center">
        <AnimatePresence>
          {hover ? (
            <motion.span
              key="arrow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BsFillArrowRightCircleFill className="text-xl" />
            </motion.span>
          ) : (
            <motion.span
              key="circle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaRegCircle className="text-black/20 text-[5px]" />
            </motion.span>
          )}
        </AnimatePresence>

        <div className="text-lg font-semibold relative">
          <motion.span className="relative inline-block"
          initial={{x:0}}
          animate={{x:hover?5:0}}
          >
            {text}
            <motion.div
              className="absolute -bottom-[1px] left-0 h-[1px] bg-black w-full origin-right"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hover ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Button;
