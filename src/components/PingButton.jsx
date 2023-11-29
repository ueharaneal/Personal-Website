import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import InlineSVG from 'react-inlinesvg';
import { FaPaperPlane } from "react-icons/fa";
 

const PingButton = ({ selectedPage, setSelectedPage }) => {
  return (
    <AnchorLink href="#contactme" onClick={() => setSelectedPage("contactme")}>
      <div className="fixed z-50 top-[70%] right-24 px-4 py-36 cursor-pointer">
        <Ping />
      </div>
    </AnchorLink>
  );
};

const LOOP_DURATION = 5;

const Ping = () => {
  return (
    <div className="relative">
      <Logo />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView
    >
        
         <FaPaperPlane
         className="text-white h-7 w-7"
         />
    </motion.div>
    
  );
};

const Band = ({ delay }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 h-32 w-32 rounded-full border-[1px] border-violet-500 bg-gradient-to-br from-violet-500/50 to-violet-800/20 shadow-xl shadow-violet-500/40"
    />
  );
};

export default PingButton;
