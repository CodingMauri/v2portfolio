import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Hamburger from "hamburger-react";
import Mobile from "./Mobile";
export default function Navbar({ scrollToSection, mobileView }) {
  const [isOpen, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 10) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    handleScroll();
  });
  return (
    <div
      className={classNames(
        "fixed flex items-center w-full h-[10%] bg-[#141414] z-50",
        opacity ? "bg-opacity-100 transition-all" : "bg-opacity-0"
      )}
    >
      <div className="inline-flex w-full justify-evenly items-center">
        <h2 className="text-lg text-white font-reality font-bolded p-3">
          mauri.dev
        </h2>
        {mobileView ? (
          <div className="z-85" onClick={toggleMenu}>
            <Hamburger color="white" className="fixed z-85 text-white" />
          </div>
        ) : (
          <>
            <ul
              onClick={() => scrollToSection("About")}
              className="text-white font-xl font-reality cursor-pointer"
            >
              About
            </ul>
            <ul
              onClick={() => scrollToSection("Projects")}
              className="text-white font-xl font-reality cursor-pointer"
            >
              Projects
            </ul>

            <ul
              onClick={() => scrollToSection("Contact")}
              className="text-white font-xl font-reality cursor-pointer"
            >
              Contact
            </ul>
          </>
        )}
        {mobileView && isOpen && <Mobile setOpen = {setOpen} scrollToSection = {scrollToSection} />}
      </div>
    </div>
  );
}
