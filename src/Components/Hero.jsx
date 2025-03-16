import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Hero = ({func}) => {
  const TEXT_DURATION = 0.5;
  const LETTER_DELAY = 0.04;
  const TEXT_INTERVAL = 1500;

  const text = ["GLAMOUR", "ELEGANCE", "Manish Malhotra", ""];
 
  const [index2, setIndex2] = useState(0);
  const [index, setIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const src = [
    "https://www.harpersbazaararabia.com/wp-content/uploads/cloud/2023/07/24/image00010-1.jpeg",
    "https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-P-MMS-SR-64289-BL-PTT_C-ENQ/MM-P-MMS-SR-64289-BL-PTT_C-ENQ-1.jpg",
    "https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-P-MMS-SR-64082-PTT_C-ENQ/MM-P-MMS-SR-64082-PTT_C-ENQ-6.jpg",
    
  ];

  useEffect(() => {
    if (showImage && index2 < src.length - 1) {
      const timeout = setTimeout(() => {
        setIndex2((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (index2 === src.length - 1) {
      setTimeout(()=>{
        func()
      },500)
    }
  }, [showImage, index2]);

  useEffect(() => {
    if (index === text.length - 1) {
      setTimeout(() => {
        setShowImage(true);
      },900 );
      return;
    }

    const timer = setInterval(
      () => {
        setIndex((prev) => (prev + 1) % text.length);
      },
      index === 0 ? 1400 : 2000
    );

    return () => clearInterval(timer);
  }, [index]);

  

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center relative overflow-hidden">
      {/* Text Animation */}
      <div className="text-5xl fot-serif font-thin  text-[#E0CCBB] lg:text-5xl overflow-hidden  relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={index} className="flex">
            {text[index].split("").map((l, i) => (
              <motion.span
                key={i}
                custom={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ opacity:0 }}
                transition={{
                  duration:0.5,
                  delay: i * LETTER_DELAY,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {l}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Animation */}
      {showImage && index2 < src.length && (
        
          <motion.img
            key={index2}
            src={src[index2]}
            alt="Background"
            className="z-50 absolute bottom-0 left-0 w-full h-full object-cover object-[50%_10%]"
            initial={{
              clipPath: "polygon(19% 94%, 75% 94%, 75% 100%, 18% 100%)",
              
            }}
            animate={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}

           
            
            transition={{ duration: 0.3, ease: "circOut" }}
          />
        
      )}

      {/* Previous Image Overlay */}
      {showImage && index2 > 0 && (
        <img
          className="h-full w-full   object-cover object-[50%_10%] z-10"
          src={src[index2 - 1]}
          alt="Previous Image"
        />
      )}

     
      
    </div>
  );
};

export default Hero;
