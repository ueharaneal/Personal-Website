import React, { useState, useEffect} from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import MySkills from './components/MySkills'
import DotGroup from "./components/DotGroup"
import useMediaQuery from"./hooks/useMediaQuery";
import LineGradient from './components/LineGradient';
 
function App(){
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  useEffect(()=>{
    const  handleScroll =()=>{
      if(window.scrollY ===0)setIsTopOfPage(true);
      if(window.scrollY!== 0)setIsTopOfPage(false );
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, [])
  return(
    <div>
      <NavBar
        isTopOfPage = {isTopOfPage} 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens &&(
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Hero setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
      
    </div>
  )
}

export default App;