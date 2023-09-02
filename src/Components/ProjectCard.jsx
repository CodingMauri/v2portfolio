import React from "react";

const ProjectCard = ({ work, index }) => {

//Defining the max number of text
  const limit = 200;


  const cutText =
    work.about.length > limit
      ? work.about.slice(0, limit ) + "..."
      : work.about;
  return (
    <div className="inline-flex m-10 justify-center relative w-1/4 aspect-square bg-[#242424] rounded-xl">
      <div className="absolute w-1/2 bg-[#303030] aspect-square mt-10 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-contain rounded-3xl px-1 rotate-12"
          src={work.img}
          alt={work.title}
        />
      </div>
      <div className="absolute bottom-1/4 w-full text-left  pl-10 ">
        <p className="text-lg text-white  font-reality underline  ">{work.title}</p>
      </div>
      <section className="absolute bottom-0">
        <p className = "text-white text-sm -tracking-tighter leading-relaxed p-4">{cutText}</p>
        </section>
    </div>
  );
};

export default ProjectCard;
