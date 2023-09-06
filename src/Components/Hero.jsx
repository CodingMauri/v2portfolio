import React from "react";
import {motion} from "framer-motion"
import Typewriter from "typewriter-effect";
import sunset from "../assets/images/IMG_9643.jpg"

export default function Hero() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
        <div className = "absolute  w-full h-screen bg-black opacity-50"></div>

        <div className = "absolute w-full h-screen  bg-gradient-to-b from-transparent to-[#141414]" />

        <img className = "w-full h-full object-cover" src = {sunset} />

      <section className="absolute flex flex-col gap-10">
        <p className=" mx-auto leading-normal text-gray-200 md:text-xl md:tracking-[12px] lg:text-3xl font-reality font-bold lg:tracking-[20px] tracking-[4px]  ">
          Mauricio Alvarenga{" "}
        </p>
        <h2 className="xl:text-6xl lg:text-4xl text-3xl  text-white font-reality font-bold">
          <Typewriter
            options={{
              strings: ["Software Developer", "Full-Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </section>
     
    </div>
  );
}
