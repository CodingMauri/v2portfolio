import React from "react";

import ProjectCard from "./ProjectCard";

import { DiReact, DiFirebase, DiJavascript, DiHtml5, DiCss3} from "react-icons/di";

const Projects = () => {
  const works = [
    {
      title: "Netflix-Clone",
      about:
        "The React Netflix Clone Portfolio Project is a web application that showcases my skills in front-end web development and demonstrates my proficiency in using popular technologies such as React, Tailwind CSS, and Firebase. This project serves as both a practical exercise and a portfolio piece to highlight my abilities as a web developer.",
      github: "https://github.com/CodingMauri/n-clone2",
      live: "https://retrodash.netlify.app/",
      img: "https://user-images.githubusercontent.com/106369465/253411133-47a653ab-2719-4fb9-821c-5fd5015ff785.png",
      technologies: [{ DiFirebase }, { DiJavascript }, { DiReact }],
    },

    {
      title: "RetroDash",
      about: "RETRO DASH Game- Developing a 3D runner game powered with Three.js with models built in blender. The goal of the game is to avoid the obstacles for as long as possible, the player will have a running distance counter on the top of their screen. the player model can move side to side to avoid incoming objects.",
      github: "https://github.com/runner-runner224/running-square",
      live: "https://retrodash.netlify.app/",
      img: "https://user-images.githubusercontent.com/88520969/187347253-e2faa5e9-8e99-4c39-85b2-e429a01156fc.png",
      technologies: [ { DiJavascript },{DiHtml5}, {DiCss3}],

    },
    {
      title: "Albumz",
      about: "This Album Gallery will allow you to search up a track or artist and it will return their album art. Then the user can click on it and it will send them to that specific albums information which tells them when the album was published, how many listeners it has and more!.",
      github: "https://github.com/CodingMauri/album-gallery",
      live: "https://albumzgallery.netlify.app/",
      img: "https://user-images.githubusercontent.com/106369465/194974072-1707f8d6-e446-4406-a602-41b203d22306.png",
      technologies: [ { DiJavascript }, { DiReact }],

    },
  ];
  return (
    <div className=" flex w-full h-screen   ">
      <h2 className="absolute text-white font-reality text-3xl float-right m-2 pb-10 right-32 underline">
        My Works
      </h2>
      <div className=" w-full h-full p-10 mx-auto right-0">
        {works.map((work,index) => {
            return <ProjectCard work = {work} key = {index} />
        })}
      </div>
    </div>
  );
};

export default Projects;
