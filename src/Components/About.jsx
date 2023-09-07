import React from "react";
import {motion} from "framer-motion"
const About = () => {
  return (
    <motion.div  
    initial = {{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition = {{ease:"linear", duration:1}}
    className="flex flex-col w-screen h-screen justify-center  pl-10">
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
    </motion.div>
  );
};

export default About;
