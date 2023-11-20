import { useEffect, useRef } from "react";
import Typed from "react-typed";
import useMediaQuery from "../hooks/useMediaQuery";
import Motion from "framer-motion";

import ParticlesBg from "../assets/ParticlesBg";

const Home = ({ onEnter }) => {
  const ref = useRef();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const buttonClassname =
    "bg-gradient-to-r from-purple-300 to-[#7B68EE] text-black text-sm rounded-md w-[200px] font-medium mx-auto py-2 my-8 w-[120px] md:w-[200px] md:text-xl hover:-translate-y-1 hover:scale-105 transition-transform duration-200 hover:text-[#E1D9D1]";

  return (
    <section id="home" ref={ref} className="text-[#EBE4D1] relative z-0">
      {/* Bg container */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg />
      </div>
      <div className="">
        <div className="relative flex flex-col h-screen w-full justify-center text-center mx-auto max-w-[800px]  p-3 z-10">
          <p className="text-[#7B68EE] md:text-lg font-bold  p-2">
            Your search for the right Software Developer ends here.
          </p>
          <h1 className="font-bold text-center text-4xl sm:text-6xl md:text-7xl p-3 md:py-6">
            Neal Uehara
          </h1>

          <div className="flex flex-row text-center justify-center pt-3 md:pt-5">
            <p
              style={{ alignSelf: "flex-end" }}
              className="pb-3 px-3 font-bold text-xl md:text-4xl md:px-4"
            >
              a
            </p>
            <Typed
              className="flex items-center pb-3 text-[#7B68EE] font-bold text-3xl md:text-6xl"
              strings={["Front-end", "Back-end", "Full-stack"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <p
              style={{ alignSelf: "flex-end" }}
              className="pb-3 px-2 font-bold text-xl md:text-4xl md:px-4"
            >
              Developer
            </p>
          </div>
          <p className="text-gray-400 font-bold text-lg md:text-2xl mx-14">
            Full-stack developer dedicated to problem solving, thriving in
            dynamic learning.
          </p>
          <div className="flex justify-center">
            <button className={`${buttonClassname} mr-2`}>My Resume</button>
            <button className={`${buttonClassname} ml-2`}>
              See Website Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
