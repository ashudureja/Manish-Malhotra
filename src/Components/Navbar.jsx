import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";

const Navbar = () => {
  return (
    <motion.div
      className="w-full top-0 absolute z-[1000]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: Power4.easeInOut, duration: 0.7, delay: 2 }}
    >
      <div className="max-w-screen-2xl px-5 py-5 sm:px-8 sm:py-8 mx-auto text-white flex justify-between items-center">
        <motion.div className="logo">
          <img
            className="h-10"
            src="https://manishmalhotra.in/_nuxt/img/logo-2.6cd8ade.png"
          />
        </motion.div>

        <span className="sm:hidden">
          <IoMdMenu />
        </span>

        <div className="links hidden sm:flex gap-8">
          {["Men", "Women", "New In", "Contact"].map((d, i) => (
            <motion.a
              key={i}
              className="relative text-white uppercase cursor-pointer tracking-wide"
              whileHover="hover"
            >
              {d}
              <motion.span
                className="absolute left-1/2 bottom-0 h-[2px] bg-white w-0"
                variants={{
                  hover: { width: "100%", left: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
