import React from "react";
import Hamburger from "hamburger-react";
export default function Mobile({ scrollToSection,isOpen }) {
  return (
    <div className=" absolute w-full bottom-0 h-screen translate-y-[100%] -translate-x-10 left-10 bg-[#242424] flex flex-col gap-4 z-1 p-10 transiton-all duration-500 ">
      

      <div className="flex flex-col items-center justify-center">
        <ul
          className="text-white font-reality text-md font-bold "
          onClick={() => scrollToSection("About" )}
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
      </div>
    </div>
  );
}
