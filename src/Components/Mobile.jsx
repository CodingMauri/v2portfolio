import React from "react";
import Hamburger from "hamburger-react";
export default function Mobile({ scrollToSection,isOpen }) {
  return (
    <div className=" absolute w-full h-screen bottom-0 translate-y-[90%] left-10 bg-[#242424] flex flex-col gap-4 z-1 ">
      

      <div className="flex flex-col items-center justify-evenly">
        <ul
          className="text-white font-reality text-md font-bold"
          onClick={() => scrollToSection("About" )}
        >
          About
        </ul>
        <ul
          className="text-white font-reality text-md font-bold"
          onClick={() => scrollToSection("Projects")}
        >
          Projects
        </ul>
        <ul
          className="text-white font-reality text-md font-bold"
          onClick={() => scrollToSection("Contact")}
        >
          Contact
        </ul>
      </div>
    </div>
  );
}
