import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

function Projects({ onEnter }) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const ref = useRef(null);

  return (
    <section ref={ref} id="projects" className="w-screen h-screen bg-green-500">
      <div>{/* Your content here */}</div>
    </section>
  );
}

export default Projects;
