import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import MySkills from "./pages/MySkills";
import DotGroup from "./components/DotGroup";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      // Get the position of each section
      const homePos = document.getElementById("home")?.offsetTop || 0;
      const skillsPos = document.getElementById("skills")?.offsetTop || 0;
      // ... other sections
  
      const currentScrollPos = window.scrollY + window.innerHeight / 2; // Center of the screen
  
      // Determine which section is currently in view
      if (currentScrollPos >= homePos && currentScrollPos < skillsPos) {
        setSelectedPage("home");
      } else if (currentScrollPos >= skillsPos) {
        // ... condition for "skills" and other sections
        setSelectedPage("skills");
      }
      // ... other conditions
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Hero setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
    </div>
  );
}

export default App;
