import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ work, index, mobileView }) => {
  //Defining the max number of text


  let limit = 150
  
  const cutText =
    work.about.length > limit
      ? work.about.slice(0, limit) + "..."
      : work.about;
  return (
    <motion.div
      whileHover={{ scale: 0.9}}
      className=" relative mx-auto flex flex-col justify-center items-center w-3/4 lg:h-1/2 sm:h-[80%] bg-[#242424] rounded-xl border-2 boder-white opacity-100 shadow-xl "
    >
      <div className="flex w-3/4 items-center justify-center  ">
        <img className=" w-full object-cover rounded-xl border-2 border-gray-200 shadow-xl " alt = {work.title} src={work.img} />
      </div>
      <section className="absolute p-10 mx-auto w-full h-full   gap-5  opacity-0 hover:opacity-100 transition-opacity bg-[black] bg-opacity-75 rounded-xl ">
        <h2 className="w-3/4  justify-center text-white text-xl font-reality underline py-8 sm:text-md md:text-md sm:py-1  md:py-0 sm:text-md lg:py-8">
          {work.title}
        </h2>
        <p className="text-white px-3 pb-3 sm:text-xs md:text-sm lg:text-md">
          {cutText}
        </p>
        <div className="inline-flex w-full h-10 m-3 gap-8">
          <motion.a
            href={work.github}
            whileHover={{ scale: 0.9 }}
            className="flex text-white text-lg border-2 font-bold rounded-full bg-red-700 border-white justify-center items-center px-3 min-w-10/12 sm:text-sm md:text-md sm:py-0  py-1 cursor-pointer"
          >
            Github
          </motion.a>
          <motion.a
            href={work.live}
            whileHover={{ scale: 0.9 }}
            className="flex text-white text-lg border-2 font-bold rounded-full bg-transparent w-1/4 border-white justify-center px-3 items-center min-w-10/12 py-1 sm:py-0    sm:text-sm md:text-md cursor-pointer "
          >
            Live
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectCard;
