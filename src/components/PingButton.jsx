import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaPaperPlane } from "react-icons/fa";

const PingButton = ({ selectedPage, setSelectedPage }) => {
  return (
    <AnchorLink href="#contactme" onClick={() => setSelectedPage("contactme")}>
      <div className="fixed z-50 top-[70%] 2xl:top-[73%] right-24 px-4 py-36 cursor-pointer">
        <Ping />
      </div>
    </AnchorLink>
  );
};

const LOOP_DURATION = 5;

const Ping = () => {
  return (
    <div className="relative cursor-pointer transform hover:scale-110">
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      className="z-60"
    >
      <div className="">
        <FaPaperPlane className="text-white h-7 2xl:h-8 w-7 2xl:w-8" />
      </div>
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
      className="absolute left-[50%] top-[50%] z-0 h-32 w-32 2xl:h-40 2xl:w-40 rounded-full border-[1px] border-violet-500 bg-gradient-to-br from-violet-500/50 to-violet-800/20 shadow-xl shadow-violet-500/40"
    />
  );
};

export default PingButton;
