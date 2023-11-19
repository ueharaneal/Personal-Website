import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

function Projects({ onEnter, onLeave }) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onLeave();
        }
      },
      {
        root: null, // viewport is the bounding box
        rootMargin: "0px", // No margin
        threshold: 0.1, // Triggered when 10% is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onEnter, onLeave]);

  return (
    <section ref={ref} id="projects" className="w-screen h-screen bg-green-500">
      <div>{/* Your content here */}</div>
    </section>
  );
}

export default Projects;
