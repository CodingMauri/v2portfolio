import React from "react";
import { motion } from "framer-motion";
export default function Mobile({ scrollToSection, setOpen }) {
  console.log(setOpen);
  return (
    <div className=" absolute w-full bottom-0 h-screen translate-y-[100%] bg-[#141414] -translate-x-10 left-10 flex flex-col gap-4 z-1 p-10 transiton-all duration-500 ">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "slider", stiffness: 100, duration: 1 }}
        className="flex flex-col items-center justify-center w-full h-screen"
      >
        <ul
          className="text-white font-reality text-md font-bold "
          onClick={() => scrollToSection("About")}
        >
          About
        </ul>
        <ul
          className="text-white font-reality text-md font-bold "
          onClick={() => scrollToSection("Projects")}
        >
          Projects
        </ul>
        <ul
          className="text-white font-reality text-md font-bold "
          onClick={() => scrollToSection("Contact")}
        >
          Contact
        </ul>
      </motion.div>
    </div>
  );
}
