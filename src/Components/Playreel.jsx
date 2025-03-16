import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DiVim } from "react-icons/di";
import Button from "./Partials/Button";
import Animatedword from "./Animatedword";
import Animatedpara from "./Animatedpara";
import Plus from "./Partials/Plus";
import ReactLenis from "lenis/react";
("use client");

const Playreel = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Start at top, end at top
  });

  // Transform clipPath from small rectangle to full screen
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "inset(50% 50% 50% 50%)", // Initial small rectangle
      "inset(-20% -20% -20% -20%)", // Final full screen
    ]
  );

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="relative w-full h-[200vh] bg-[#0D0E13] text-white"
      >
        {/* Pinning Effect */}
        <div className="sticky top-0 h-[100vh] flex items-center justify-center">
          {/* Animated Video */}
          <motion.div className="absolute inset-0" style={{ clipPath }}>
            <video
              ref={videoRef}
              playsInline
              autoPlay
              muted
              loop
              src="./summer.mp4"
              className="w-full h-full  opacity-50 object-cover"
            />
          </motion.div>

          <motion.h1
            className="absolute text-[#E4E0DB] top-90 lg:top-84 lg:left-10 left-5 text-3xl lg:text-8xl font-serfi italic"
            style={{ x: x1 }}
          >
            {" "}
            Summer
          </motion.h1>

          <motion.h1
            className="absolute lg:right-10 right-5 lg:top-90 text-[#E4E0DB] text-3xl lg:text-8xl font-serfi italic"
            style={{ x: x2 }}
          >
            {" "}
            Collection
          </motion.h1>

          <div className="text-[#E4E0DB] cursor-pointer text-xs lg:text-sm absolute flex items-center justify-center gap-1 underline top-20">
            <Plus />
            <h3>View Full Collection</h3>
          </div>

          <p className="absolute italic text-[#E4E0DB] bottom-20 lg:w-100 w-50 text-center font-bold text-xs">
            Effortless elegance meets exquisite craftsmanship in this season's
            designs. Perfect for making a bold statement this summer.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Playreel;
