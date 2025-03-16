import React from "react";
import { motion } from "framer-motion";

const Animatedword = ({ text, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05 }
        }
      }}
      className={className}
    >
      {text.map((line, lineIdx) => (
        <div key={lineIdx} className="overflow-hidden">
          {line.split(" ").map((word, wordIdx) => (
            <motion.span
              key={wordIdx}
              className="mr-4 inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1 }
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default Animatedword;