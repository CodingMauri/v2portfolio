import React from "react";

const About = () => {
  return (
    <div  className="flex flex-col w-full h-screen justify-center  pl-10">
      <h2 id = "About" className="font-reality text-3xl text-white pl-1 underline ">About Me!</h2>
      <div className = "flex w-full h-[50%] items-center  ">
        <p className="text-white text-lg   leading-relaxed -tracking-tighter sm:text-sm md:text-md lg:text-xl lg:w-1/2 ">
          Software Developer based in the Bay Area, with a passion for
          transforming creativity into captivating web pages. I thrive in
          collaborative, fast-paced environments and possess an unwavering
          determination to find solutions to any challenge.<br/> Other than Software
          , I love spending my free time exploring backroads on my motorcycle or
          playing videogames
        </p>
      </div>
    </div>
  );
};

export default About;
