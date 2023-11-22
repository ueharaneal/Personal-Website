import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import MainProjectsDisplay from '../components/MainProjectsDisplay'

function Projects({ onEnter }) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const ref = useRef(null);

  return (
    <section ref={ref} id="projects" className="mx-auto w-5/6 flex justify-center h-screen relative">
      <div className="flex  justify-center mt-16">
        <MainProjectsDisplay className=""/>
      </div>
      
    </section>
  );
}

export default Projects;
