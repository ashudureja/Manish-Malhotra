import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Animatedword from "./Animatedword";
import Button from "./Partials/Button";
import CustomCursor from "./Partials/CustomCursor";
import Plus from "./Partials/Plus";
import ReactLenis from "lenis/react";
'use client';

const MediaContainer = ({
  item,
  height,
  hoveredItem,
  videoSrc,
  imgSrc,
  top,
  left,
  y,
  label,
  mouseEnter,
  mouseLeave,
  isMobile,
}) => (
  <motion.div
    className={`cursor-pointer group ${
      isMobile
        ? "relative w-full mb-8"
        : `absolute aspect-[0.7/1] ${top} ${left}`
    } ${height}`}
    style={{ y }}
    onMouseEnter={() => mouseEnter(item)}
    onMouseLeave={mouseLeave}
  >
    <div
      className={`h-full w-full relative overflow-hidden bg-gray-50 ${
        !isMobile && "aspect-[0.7/1]"
      }`}
    >
      <AnimatePresence mode="wait">
        {hoveredItem !== item && (
          <motion.img
            key="image"
            className="h-full w-full object-cover object-center absolute"
            src={imgSrc}
            alt={label}
            loading="lazy"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {hoveredItem === item && (
          <motion.video
            key="video"
            className="h-full w-full object-cover object-top absolute"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 p-4 bg-white/80 backdrop-blur-sm text-xs font-medium tracking-widest">
        {label}
      </div>
    </div>
  </motion.div>
);

const Work2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [view, setView] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const container = useRef(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mousePos = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  const mouseEnter = (item) => {
    setHoveredItem(item);
    setView(true);
  };

  const mouseLeave = () => {
    setHoveredItem(null);
    setView(false);
  };

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const xs = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <ReactLenis root>
      <div
        ref={container}
        className="px-4 md:px-20 lg:px-28 relative pt-20 md:pt-32 lg:pt-44 w-full h-[280vh] lg:h-[250vh] overflow-hidden"
        onMouseMove={mousePos}
      >
        <div className="mb-18 md:mb-20 text-center w-full text-[2.4rem] md:text-[4.5rem] lg:text-[6rem] font-serif leading-[1] md:leading-[0.9]">
          <Animatedword text={["Curated This Season"]} />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-30 lg:right-70 lg:left-auto lg:transform-none">
          <Button text="More Work" />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-12 px-4">
          <MediaContainer
            item="fusion"
            height="lg:h-[70vh] h-[50vh]"
            isMobile={true}
            hoveredItem={hoveredItem}
            videoSrc="./Fusion.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521864.webp"
            label="FUSION WORK"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          <MediaContainer
            item="lehnga"
            height="lg:h-[80vh] h-[50vh]"
            isMobile={true}
            hoveredItem={hoveredItem}
            videoSrc="./Lehnga2.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521673.webp"
            label="Lehnga"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          <MediaContainer
            item="Saree"
            height="lg:h-[75vh] h-[50vh]"
            isMobile={true}
            hoveredItem={hoveredItem}
            videoSrc="./Saree.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400522162.webp"
            label="Saree"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          <MediaContainer
            item="SHERWANIS"
            height="lg:h-[60vh] h-[50vh]"
            isMobile={true}
            hoveredItem={hoveredItem}
            videoSrc="./Sherwani.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521991.webp"
            label="SHERWANIS"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          <MediaContainer
            item="fusion"
            height="lg:h-[55vh] h-[30vh]"
            top="top-[35%]"
            left="left-[65%]"
            y={sm}
            isMobile={false}
            hoveredItem={hoveredItem}
            videoSrc="./Fusion.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521864.webp"
            label="FUSION WORK"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          <MediaContainer
            item="lehnga"
            height="lg:h-[80vh] h-[30vh]"
            top="top-[20%]"
            left="left-[15%]"
            y={xs}
            isMobile={false}
            hoveredItem={hoveredItem}
            videoSrc="./Lehnga2.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521673.webp"
            label="Lehnga"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          <MediaContainer
            item="Saree"
            height="h-[60vh]"
            top="top-[64%]"
            left="left-[46%]"
            y={md}
            isMobile={false}
            hoveredItem={hoveredItem}
            videoSrc="./Saree.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400522162.webp"
            label="Saree"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          <MediaContainer
            item="SHERWANIS"
            height="h-[40vh]"
            top="top-[78%]"
            left="left-[15%]"
            y={lg}
            isMobile={false}
            hoveredItem={hoveredItem}
            videoSrc="./Sherwani.mp4"
            imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521991.webp"
            label="SHERWANIS"
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />
        </div>

        {view && <CustomCursor pos={pos} />}
        <div className="absolute top-90 right-30 space-y-3 text-black hidden sm:block">
          <div className="flex items-center gap-2">
            <Plus className="text-sm" />
            <h1 className="text-sm font-semibold uppercase tracking-wide">
              Signature Creations
            </h1>
          </div>
          <p className="w-60 text-sm leading-relaxed opacity-80">
            A handpicked selection of exquisite designs, crafted with passion
            and precision, redefining elegance this season.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Work2;
