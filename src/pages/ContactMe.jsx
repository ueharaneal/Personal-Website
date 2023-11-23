import { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from 'framer-motion'

import Terminal from "../components/Terminal"

function ContactMe() {
  const ref = useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 576px)");


  return (

    <section ref={ref} id="contactme" className="flex h-screen w-5/6 mx-auto relative ">
      <div div className=" text-white mt-10 w-full">
        <motion.div
          initial={{
            scale:0,
          }}
          animate={{
            scale:1 
          }}
          exit={{
            rotate:"180deg"
          }}
          transition={{
            duration:3,
            type: "spring",
            ease: "backInOut"

          }}
          className="text-4xl  text-white mb-16 ml-10 font-semibold font-sans"
         >
          CONTACT<span className="text-[#7B68EE]  ml-2">ME</span>
        </motion.div>
        <motion.div className="flex flex-row justify-center">
          {isAboveSmallScreens && <Terminal/>}
        </motion.div>
        
      </div>
    </section>
  );
}

export default ContactMe;
