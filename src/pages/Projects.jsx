import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import MainProjectsDisplay from '../components/MainProjectsDisplay'

function Projects({ onEnter }) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const ref = useRef(null);

  return (
    <section ref={ref} id="projects" className="mx-auto w-5/6 flex justify-center h-screen relative">
      <div className="flex flex-col justify-center mt-24 md:mt-6">
        <h1 className="text-3xl md:text-4xl text-white mt-24 md:mt-0  mb-6 md:mb-16 ml-10 font-semibold font-sans p-7 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit text-center md:text-left">
            {" "}
            MY <span className="text-[#7B68EE] ml-2">PROJECTS</span>
          </h1>
        <MainProjectsDisplay className=""/>
      </div>
      
    </section>
  );
}

export default Projects;
