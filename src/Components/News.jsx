import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Button from "./Partials/Button";
import Animatedword from "./Animatedword";
import Animatedpara from "./Animatedpara";
import { motion, useScroll, useTransform } from "framer-motion"; 

const News = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef, // Attach scroll tracking to the container
    offset: ["start end", "end start"], // Adjust the offset as needed
  });

  const moveUp = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -200] : [0, -300]
  );

  return (
    <motion.div
      ref={containerRef} // Attach the ref to the container div
      className="w-full h-[53vh] sm:h-[60vh] sm:mt-30  mt-[-50] mb-10 flex flex-col justify-between items-center py-6"
    >
      <motion.div className="flex items-center justify-center gap-2" style={{ y: moveUp }}>
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-[3%]"
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
          ></path>
        </svg>
        <h3>In the Limelight</h3>
      </motion.div>
      <motion.div className="w-[70%] sm:w-[65%] py-1" style={{ y: moveUp }}>
        <h1 className="text-5xl sm:text-8xl sm:tracking-tighter font-semibold text-center">
          <Animatedword text={["Style on the Spotlight"]} />
        </h1>
      </motion.div>
      <motion.div className="w-[60%] sm:w-[30%] text-center" style={{ y: moveUp }}>
        <Animatedpara
          text="Where fashion meets fame—discover how our designs shine on the biggest stars and global stages."
        />
      </motion.div>
      <motion.div className="w-full flex items-center justify-center gap-2" style={{ y: moveUp }}>
        <Button text="Explore More" />
      </motion.div>
    </motion.div>
  );
};

export default News;
