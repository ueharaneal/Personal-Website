import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import MainProjectsDisplay from '../components/MainProjectsDisplay'

function Projects({ onEnter }) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const ref = useRef(null);

  return (
    <section ref={ref} id="projects" className="mx-auto w-5/6 flex justify-center h-screen relative">
      <div className="flex flex-col justify-center mt-8">
        <p className="text-3xl md:text4xl text-white mb-6 md:mb-16 ml-10 font-semibold font-sans">
            {" "}
            MY <span className="text-[#7B68EE] ml-2">PROJECTS</span>
          </p>
        <MainProjectsDisplay className=""/>
      </div>
      
    </section>
  );
}

export default Projects;
