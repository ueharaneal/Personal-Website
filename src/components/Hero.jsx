 import React from 'react'
 import Typed from 'react-typed'
 import useMediaQuery from '../hooks/useMediaQuery';
 import Motion from 'framer-motion';
 import AnchorLink from 'react-anchor-link-smooth-scroll';
 
 const Hero = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
   return (
    <section id="home" className="text-[#EBE4D1]">
        <div className="flex flex-col h-screen w-full justify-center text-center mx-auto max-w-[800px] mt-[96px] p-3 ">
            <p className="text-[#7B68EE] md:text-lg font-bold p-2">Your search for the right Software Developer ends here.</p>
            <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl p-3 md:py-6">Neal Uehara</h1>
            
            <div className="flex flex-row text-center justify-center py-3 md:py-5">
                <p className="py-2 px-3 font-bold text-xl md:text-4xl md:px-4">a </p>
                <Typed  className="text-[#7B68EE]  font-bold text-3xl md:text-5xl"strings={["Front-end", "Back-end", "Full-stack"]} typeSpeed={120} backSpeed={140} loop/>
                <p className=" py-2 px-4 font-bold text-xl md:text-4xl">Developer</p>
            </div>
            <p className="text-gray-500 font-bold text-lg md:text-2xl mx-14">Full-stack developer dedicated to problem solving, thriving in dynamic learning.</p>
            <button className="bg-gradient-to-r from-purple-300 to-[#7B68EE] text-black rounded-md w-[200px] font-medium mx-auto py-2 my-8 md:text-xl">My Resume</button>
        </div>
    </section>
     
   )
 }
 
 export default Hero
 