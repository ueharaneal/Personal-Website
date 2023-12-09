import Typed from "react-typed";
import {motion} from "framer-motion";

import Resume from "../assets/SWE126.pdf"
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  
  const websiteCodeLink = "https://github.com/ueharaneal/Personal-Website"
  const buttonClassname =
    "flex flex-row justify-between bg-gradient-to-r from-purple-300 to-[#7B68EE] text-black text-sm rounded-md font-medium mx-auto py-2 px-6 my-8 w-[120px] md:w-[200px] md:text-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-200 hover:text-gray-800 hover:bg-gradient-to-r hover:from-purple-400 hover:to-[#6754DA] group";

  return (
    <section id="home"  className="text-[#EBE4D1] relative z-0">
      {/* Bg container */}
     
        <motion.div
          initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.2 }}
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
          className="relative flex flex-col h-screen w-full justify-center text-center mx-auto max-w-[800px] z-10">
          <p className="text-[#7B68EE] md:text-lg font-bold  p-2">
            Your search for the right Software Engineer ends here.
          </p>
          <motion.button 
          whileHover={{scale:1.10, rotate:"2.5deg"}}
          className="font-bold text-center text-4xl sm:text-6xl md:text-7xl p-3 md:py-6">
            Neal Uehara
          </motion.button>

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
            Full-stack developer dedicated to problem solving
          </p>
          <div className="flex justify-center">
            <a href={Resume} target="_blank" rel="noopener noreferrer" className={`${buttonClassname} mr-2`}>See Resume <FiArrowRight className="h-7 group-hover:translate-x-4 transition-transform" /></a>
            <a href={websiteCodeLink} target="_blank" rel="noopener noreferrer" className={`${buttonClassname} ml-2`}>
              Website Code
              <FiArrowRight className="h-7 group-hover:translate-x-4 transition-transform" />
            </a>
          </div>
        </motion.div>
      
    </section>
  );
};

export default Home;
