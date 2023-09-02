import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen relative py-2 pl-10 m-1">
      <h2 className="font-reality text-3xl text-white pl-1 underline ">About Me!</h2>
      <div className = "flex w-1/2 h-[50%] items-center  ">
        <p className="text-white text-lg py-1 m-2 leading-relaxed -tracking-tighter ">
          Software Developer based in the Bay Area, with a passion for
          transforming creativity into captivating web pages. I thrive in
          collaborative, fast-paced environments and possess an unwavering
          determination to find solutions to any challenge. Other than Software
          , I love spending my free time exploring backroads on my motorcycle or
          playing videogames
        </p>
      </div>
    </div>
  );
};

export default About;
