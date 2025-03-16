import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import Plus from "./Partials/Plus";
import ReactLenis from "lenis/react";
'use client';

const Video = ({ main }) => {
  const videoRef = useRef(null);
  const container = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    if ({ main } && videoRef.current) {
      videoRef.current.play();
    }
  });

  return (
    <ReactLenis root>
      <div
        ref={container}
        className="h-[120vh] sm:h-[180vh] relative flex w-full bg-black bg-cover overflow-hidden"
      >
        <img
          className="absloute z-10 scale-[102%] object-cover object-[90%_10%] h-[100vh] w-full"
          src="https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:2500)/Manish_1/Diwali_Part_Part_1_(19_styles)/MM-P-MMS-SR-64082-PTT_C-ENQ/MM-P-MMS-SR-64082-PTT_C-ENQ-6.jpg"
        ></img>

        <Navbar />

        <motion.video
          ref={videoRef}
          src="./bgvideo.mp4"
          autoPlay
          muted
          loop
          className="absolute z-[999] w-full h-full object-cover"
          initial={{
            clipPath: "polygon(19% 94%, 75% 94%, 75% 100%, 18% 100%)",
          }}
          animate={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />

        <div className="absolute z-[999] w-full top-0">
          <div
            className="Textpart max-w-screen-2xl mx-auto h-full text-center  px-5 sm:px-18
        text-white mt-70 sm:mt-85"
          >
            <motion.div
              className="Para text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
              <p className="text-lg sm:text-xl" style={{ y }}>
                Redefining luxury through timeless craftsmanship,
              </p>
              <p className="text-md sm:text-xl" style={{ y }}>
                curating bespoke fashion that celebrates heritage
              </p>
              <p className="text-md sm:text-xl " style={{ y }}>
                with a contemporary vision.
              </p>
            </motion.div>
            <motion.div
              className="Heading mt-10 sm:mt-15"
              initial={{ opacity: 0, rotate: 20, originX: 0 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
            >
              <motion.h1
                className="text-7xl sm:text-[12rem] tracking-tighter leading-none font-serif italic"
                style={{ y }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.5 }}
              >
                Haute
              </motion.h1>
              <motion.h1
                className="text-7xl sm:text-[12rem] tracking-tighter leading-none font-serif italic"
                style={{ y }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.5 }}
              >
                Couture
              </motion.h1>
              <motion.h1
                className="text-7xl sm:text-[12rem] tracking-tighter leading-none font-serif italic"
                style={{ y }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.7 }}
              >
                Legacy
              </motion.h1>
            </motion.div>
            <div className="flex items-center justify-center text-center">
              <Plus />
              <h1>Studio</h1>
            </div>

            {/* <div className="Para2 mt-25absolute sm:w-[42%] sm:mt-30 ">
            <p className="text-lg sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Video;
