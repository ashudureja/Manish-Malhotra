import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import News from "./News";
import ReactLenis from "lenis/react";
("use client");

const Images = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on client side
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Common animation values
  const rightImageX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-200, 30] : [-400, 200]
  );
  const leftImageX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [200, -30] : [400, -200]
  );

  return (
    <ReactLenis root>
      <div className="w-full sm:h-[120vh] h-[100vh] bg-white flex lg:mt-20 items-center justify-center overflow-hidden">
        <div className="w-[60%] bg-red-100 h-[40%] sm:h-[70%] sm:w-[30%] relative">
          {/* Right Side Image */}
          <motion.div
            className="absolute aspect-[1.2/1] lg:aspect-[1.5/1] h-[7rem] -right-[40%] top-16 sm:h-[11rem] sm:top-20 sm:-right-[60%]"
            style={{ x: rightImageX }}
          >
            <img
              className="w-full h-full object-cover object-[60%_10%]"
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-MMS-GW-54374_C-ENQ/MM-MMS-GW-54374_C-ENQ-1.jpg"
            />
          </motion.div>

          {/* Left Side Image */}
          <motion.div
            className="absolute w-[8rem] aspect-[1.5/1] -left-[30%] -bottom-10 sm:w-[20rem] sm:-left-[70%] sm:-bottom-20"
            style={{ x: leftImageX }}
          >
            <img
              className="w-full h-full object-cover object-[60%_2%]"
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-MMS-SR-63547-AC-BL-PTT_C-ENQ/MM-MMS-SR-63547-AC-BL-PTT_C-ENQ-2.jpg"
            />
          </motion.div>

          {/* Left Middle Image */}
          <motion.div
            className="absolute w-[8rem] aspect-[1.1/1] left-[-50%] top-[20%] sm:w-[17rem] sm:left-[-70%] sm:top-[13%]"
            style={{ x: leftImageX }}
          >
            <img
              className="w-full h-full object-cover object-[10%_20%]"
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-P-MMS-SR-64289-BL-PTT_C-ENQ/MM-P-MMS-SR-64289-BL-PTT_C-ENQ-4.jpg"
            />
          </motion.div>

          {/* Static Center Video */}
          <video
            className="w-full h-full object-cover object-[10%_20%]"
            src="./disha.mp4"
            playsInline
            autoPlay
            loop
            muted
          />

          {/* Bottom Right Video */}
          <motion.div
            className="absolute w-[8rem] aspect-[1.2/1] bottom-[-20%] right-[-30%] sm:w-[20rem] sm:bottom-[-20%] sm:right-[-70%]"
            style={{ x: rightImageX }}
          >
            <video
              className="w-full h-full object-cover object-[20%_10%]"
              src="./tripti.mp4"
              playsInline
              autoPlay
              loop
              muted
            />
          </motion.div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Images;
