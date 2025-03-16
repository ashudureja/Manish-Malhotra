import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Animatedword from "./Animatedword";
import Animatedpara from "./Animatedpara";
import Button from "./Partials/Button";
import CustomCursor from "./Partials/CustomCursor";

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
}) => (
  <motion.div
    className={`cursor-pointer group aspect-[0.7/1] absolute ${height} ${top} ${left}`}
    style={{ y }}
    onMouseEnter={() => mouseEnter(item)}
    onMouseLeave={mouseLeave}
  >
    <div className="h-full w-full relative overflow-hidden bg-gray-50">
      {/* Image (Fades Out) */}
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

      {/* Video (Fades In) */}
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

      {/* Label */}
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

  const container = useRef(null); // ✅ Added useRef

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
    target: container, // ✅ Fixed reference
    offset: ["start end", "end start"],
  });

  const xs = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={container}
      className="px-4 md:px-20 lg:px-28 relative pt-20 md:pt-32 lg:pt-44 w-full h-[300vh] lg:h-[250vh] overflow-hidden"
      onMouseMove={mousePos}
    >
      <div className="mb-12 md:mb-20 w-full text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-serif leading-[1] md:leading-[0.9]">
        <Animatedword text={["Curated This Season"]} />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-30 lg:right-70 lg:left-auto lg:transform-none">
        <Button text="More Work" />
      </div>

      <MediaContainer
        item="fusion"
        height="h-[30vh] md:h-[45vh] lg:h-[55vh]"
        top="top-[20%] md:top-[30%] lg:top-[35%]"
        left="left-[50%] md:left-[60%] lg:left-[65%]"
        y={sm}
        hoveredItem={hoveredItem}
        videoSrc="./Fusion.mp4"
        imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521864.webp"
        label="FUSION WORK"
        mouseEnter={mouseEnter}
        mouseLeave={mouseLeave}
      />

      <MediaContainer
        item="lehnga"
        height="h-[50vh] md:h-[70vh] lg:h-[80vh]"
        top="top-[10%] md:top-[15%] lg:top-[20%]"
        left="left-[5%] md:left-[10%] lg:left-[15%]"
        y={xs}
        hoveredItem={hoveredItem}
        videoSrc="./Lehnga2.mp4"
        imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521673.webp"
        label="Lehnga"
        mouseEnter={mouseEnter}
        mouseLeave={mouseLeave}
      />

      <MediaContainer
        item="Saree"
        height="h-[40vh] md:h-[50vh] lg:h-[60vh]"
        top="top-[55%] md:top-[60%] lg:top-[64%]"
        left="left-[35%] md:left-[42%] lg:left-[46%]"
        y={md}
        hoveredItem={hoveredItem}
        videoSrc="./Saree.mp4"
        imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400522162.webp"
        label="Saree"
        mouseEnter={mouseEnter}
        mouseLeave={mouseLeave}
      />

      <MediaContainer
        item="SHERWANIS"
        height="h-[30vh] md:h-[35vh] lg:h-[40vh]"
        top="top-[70%] md:top-[75%] lg:top-[78%]"
        left="left-[5%] md:left-[12%] lg:left-[15%]"
        y={lg}
        hoveredItem={hoveredItem}
        videoSrc="./Sherwani.mp4"
        imgSrc="https://cdn.pixelbin.io/v2/black-bread-289bfa/81ub5U/original/manish-cms_images/17400521991.webp"
        label="SHERWANIS"
        mouseEnter={mouseEnter}
        mouseLeave={mouseLeave}
      />

      {/* Custom Cursor */}
      {view && <CustomCursor pos={pos} />}
    </div>
  );
};

export default Work2;
