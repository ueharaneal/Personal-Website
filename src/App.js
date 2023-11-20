import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import useMediaQuery from "./hooks/useMediaQuery";

import Home from "./pages/Home";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

import DotGroup from "./components/DotGroup";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      // Get the position of each section
      const homePos = document.getElementById("home")?.offsetTop || 0;
      const aboutPos = document.getElementById("about")?.offsetTop || 0;
      const skillsPos = document.getElementById("skills")?.offsetTop || 0;
      const projectsPos = document.getElementById("projects")?.offsetTop || 0;
      const contactPos = document.getElementById("contactme")?.offsetTop || 0;
      
      const currentScrollPos = window.scrollY + window.innerHeight / 2; // Center of the screen

      // Determine which section is currently in view
      if (currentScrollPos >= homePos && currentScrollPos < aboutPos) {
        setSelectedPage("home");

      } else if (currentScrollPos >= aboutPos && currentScrollPos < skillsPos) {
        setSelectedPage("about");

      } else if (currentScrollPos >= skillsPos && currentScrollPos < projectsPos){
        setSelectedPage("skills")

      } else if (currentScrollPos >= projectsPos && currentScrollPos < contactPos ){
        setSelectedPage("projects")

      } else if ( currentScrollPos >= contactPos){
        setSelectedPage("contactme")
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      
        <NavBar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className='fixed'
        />
         {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="fixed z-40 right-0 top-1/2"
            />
          )}
  
        {/* Home and other content */}
        <div className="mx-auto md:h-full relative">
         
          <div className="">
            <Home setSelectedPage={setSelectedPage} className="z-10"/>
            <About/>
            <MySkills setSelectedPage={setSelectedPage}/>
            <Projects/>
            <ContactMe/>

          </div>
          

        </div>
    </div>
  );
}

export default App;