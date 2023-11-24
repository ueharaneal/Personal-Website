import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import ShazamifyGif from "../assets/projectVideos/ShazamifyGIF.mov";
const solutions = [
  {
    id: 1,
    title: "WDIDW-Survey Application",
    description:
      "This website/application empowers business owners and individuals to effortlessly distribute email surveys to their contact lists. All survey responses are securely stored, facilitating easy access and review.",
    imgSrc:
      "https://media2.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e47hfid50hu34mzkabzoy46hrftyl6g6656uygzmnpy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    codeLink:
      "https://github.com/ueharaneal/What-Did-I-Do-Wrong-Survey-Application",
    liveView: "https://hidden-ridge-03010-2e2246d75af4.herokuapp.com/",
  },
  {
    id: 2,
    title: "Shazamify",
    description:
      "Shazamify is a cutting-edge music streaming web application that offers a unique and interactive experience for music lovers. This web app stands out with its third-party backend integration, extensive API library, and visually appealing user interface.",
    imgSrc: ShazamifyGif,

    codeLink: "https://github.com/ueharaneal/Shazamify",
    liveView: "https://shazamify.com/",
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
    <section className="px-4 md:px-6 py-6 text-white">
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-[1fr_350px] relative">
        <div>
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
              <motion.video
                key={imgSrc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative rounded-2xl z-30 border-2 border-[#241964]"
                autoPlay
                loop
                muted
              >
                <source src={imgSrc} type="video/mp4" />
              </motion.video>
        </AnimatePresence>
        <motion.div 
        style={{ left: '66%' }}
        className="absolute bottom-[50%] z-10 h-12 w-[30%] bg-gradient-to-r from-[#7B68EE] to-transparent"/>
      </div>
    </section>
  );
};

const Solution = ({
  title,
  description,
  codeLink,
  liveView,
  index,
  open,
  setOpen,
}) => {
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
            className=" text-lg md:text-2xl font-bold w-fit bg-gradient-to-r from-[#fac003] to-[#e3d42e] bg-clip-text"
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
            onClick={() => window.open(codeLink, "_blank")}
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
            onClick={() => window.open(liveView, "_blank")}
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
        className="absolute inset-0 z-10  border-2 border-[#fac003] rounded-3xl bg-gradient-to-r from-[#644bf2] to-transparent"
      />
      <div className="absolute inset-0 z-0 border-4 border-[#231a5e] bg-[#6A5ACD] rounded-3xl bg-opacity-90" />
    </div>
  );
};

export default MainProjectsDisplay;
