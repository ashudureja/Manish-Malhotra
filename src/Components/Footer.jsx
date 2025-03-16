import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  relative min-h-screen flex flex-col justify-end bg-black overflow-hidden">
      {/* Abstract Artistic Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://media3.giphy.com/media/l0HUnvk2J2yYpJG4U/giphy.gif?cid=6c09b952joqmit33v1qio8ljpnb3cnijj1wyje06n5ljnavh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          alt="Background Animation"
          className="w-full h-full object-cover object-center sm:object-[10%_10%] opacity-40 blur-lg"
        />
        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-[#E0CCBB] opacity-10 blur-3xl"></div>
      </div>

      {/* Floating Light Effect */}
      <div className="absolute inset-0 flex justify-center items-end pb-40">
        <div className="w-48 h-48 bg-[#E0CCBB] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 text-center px-8 py-16 sm:px-24 backdrop-blur-lg bg-black/80 rounded-t-3xl">
        {/* Brand Name in a Unique Style */}
        <h1 className="text-5xl sm:text-7xl font-thin italic text-[#E0CCBB] tracking-widest">
          Manish Malhotra
        </h1>

        {/* Artistic Line Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#E0CCBB] to-transparent mx-auto mt-4 mb-6"></div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#E0CCBB] tracking-wider">
          <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition cursor-pointer">Terms & Conditions</span>
          <span className="hover:text-white transition cursor-pointer">Shipping & Returns</span>
          <span className="hover:text-white transition cursor-pointer">Contact Us</span>
        </div>

        {/* Animated Social Icons */}
        <div className="flex justify-center gap-6 text-[#E0CCBB] text-2xl mt-8">
          <a href="#" className="hover:text-white transition transform hover:scale-125 animate-bounce-slow">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition transform hover:scale-125 animate-bounce-slow">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition transform hover:scale-125 animate-bounce-slow">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition transform hover:scale-125 animate-bounce-slow">
            <FaYoutube />
          </a>
        </div>

        {/* Subtle Floating Text Effect */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-sm text-[#E0CCBB] opacity-60 animate-float">
          &copy; {new Date().getFullYear()} Manish Malhotra. Crafted with Elegance.
        </div>
      </div>
    </div>
  );
};

export default Footer;
