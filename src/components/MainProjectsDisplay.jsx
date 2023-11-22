import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const solutions = [
  {
    id: 1,
    title: "Individuals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
    imgSrc:
      "https://media2.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e47hfid50hu34mzkabzoy46hrftyl6g6656uygzmnpy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    
  },
  {
    id: 2,
    title: "Shazamify",
    description:
      "Shazamify is a cutting-edge music streaming web application that offers a unique and interactive experience for music lovers. This web app stands out with its third-party backend integration, extensive API library, and visually appealing user interface.",
    imgSrc:
      "https://media3.giphy.com/media/3oz8xR9wKr8TaazlQc/giphy.gif?cid=ecf05e47izzshtedbk9y9dv6f5yvdsbakp7tth2n58vsdd7p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    
    codeLink:
        "https://github.com/ueharaneal/Shazamify",
    liveView:
        "https://shazamify.com/"
  },
  {
    id: 3,
    title: "Enterprise",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
    imgSrc:
      "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
];

const MainProjectsDisplay = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-6 text-white">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <p className="text-4xl font-semibold mb-8 font-sans">
            {" "}
            MY <span className="text-[#7B68EE]">PROJECTS</span>
          </p>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({ title, description, codeLink, liveView, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "270px" : "72px",
        }}
        className="p-6 rounded-xl flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-2xl font-bold w-fit bg-gradient-to-r from-[#fac003] to-[#e3d42e] bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 "
          >
            {description}
          </motion.p>
        </div>
        <div className="flex flex-row relative justify-around mb-3">
          <motion.button
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            onClick={() => window.open(codeLink, '_blank')}
            className="border-2 border-slate-800 ml-4 mr-3 -mb-7 mt-4 px-5 py-2 rounded-b-2xl flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-indigo-600 to-indigo-900 hover:from-indigo-800 hover:to-indigo-900 hover:text-[#EBE4D1]"
          >
            <span>See Code</span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            onClick={() => window.open(liveView, '_blank')}
            className="border-2 border-slate-800 ml-4 -mr-3 -mb-7 mt-4 px-5 py-2 rounded-b-2xl flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-800 hover:to-indigo-900 hover:text-[#EBE4D1]"
          >
            <span>Live View</span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform " />
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#644bf2] to-transparent"
      />
      <div className="absolute inset-0 z-0 border-4 border-[#231a5e] bg-[#6A5ACD] rounded-3xl bg-opacity-90" />
    </div>
  );
};

export default MainProjectsDisplay;
