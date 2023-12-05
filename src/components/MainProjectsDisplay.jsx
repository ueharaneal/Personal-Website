import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import ShazamifyGif from "../assets/projectVideos/ShazamifyGIF.mov";
import WdidwGIF from "../assets/projectVideos/WdidwGIF.mov";
const solutions = [
  {
    id: 1,
    title: "WDIDW-Survey Application",
    description:
      "This website/application empowers business owners and individuals to effortlessly distribute email surveys to their contact lists. All survey responses are securely stored, facilitating easy access and review.",
    imgSrc: WdidwGIF,

    codeLink:
      "https://github.com/ueharaneal/What-Did-I-Do-Wrong-Survey-Application",
    liveView: "https://hidden-ridge-03010-2e2246d75af4.herokuapp.com/",
    technologies:
      "React, Redux, ExpressJS, MongoDB, Passport.js, Stripe, SendGrid and Materialize CSS",
  },
  {
    id: 2,
    title: "Shazamify",
    description:
      "Shazamify is a cutting-edge music streaming web application that offers a unique and interactive experience for music lovers. This web app stands out with its third-party backend integration, extensive API library, and visually appealing user interface.",
    imgSrc: ShazamifyGif,

    codeLink: "https://github.com/ueharaneal/Shazamify",
    liveView: "https://shazamify.com/",
    technologies:
      "React, Redux Toolkit, GeoApify API, Shazam Core API, Tailwind CSS and dynamic components by Swiper",
  },
  {
    id: 3,
    title: "Enterprise",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
    imgSrc:
      "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",

    technologies: "React, Redux",
  },
];

const MainProjectsDisplay = () => {
  const [open, setOpen] = useState(solutions[0].id);

  const currentSolution = solutions.find((s) => s.id === open);
  const imgSrc = currentSolution?.imgSrc;
  const technologies = currentSolution?.technologies;
  return (
    <section className="px-4 md:px-6 py-6 text-white">
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        <div>
          <div className="col-span-1 md:col-span-2">
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
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden:{ x: 100, scale: 0.5 },
              visible:{ x: 0, scale: 1 }
            }}
            transition={{ delay: .3, duration: 1 }}
            className="col-span-1 rounded-2xl border-4 border-[#241964] mb-0"
            autoPlay
            loop
            muted
          >
            <source src={imgSrc} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
        <div className="col-span-1 md:col-start-2 md:row-start-2 md:mt-[-14rem] lg:mt-[-9rem]">
          <motion.div
           initial="hidden"
           whileInView="visible"
           variants={{
             hidden:{ x: 100, scale: 0.5 },
             visible:{ x: 0, scale: 1 }
           }}
           transition={{ delay: .3, duration: 1 }}
           className="text-white rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/10 backdrop-blur-sm p-7">
            <span className="font-bold text-lg text-[#fac003]">
              Technologies Used:
            </span>
            <span className="ml-2 font-medium text-md text-[#EBE4D1]">
              {technologies}
            </span>
          </motion.div>
        </div>
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden:{ x: -100, scale: 0.5 },
        visible:{ x: 0, scale: 1 }
      }}
      transition={{ delay: .3, duration: 1 }}
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "290px" : "93px",
        }}
        className="p-6 rounded-xl flex flex-col justify-between relative z-20 "
      >
        <div className="">
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
            className={`mt-4 overflow-auto ${
              isOpen ? "md:max-h-24 lg:max-h-40" : "max-h-0"
            }`}
          >
            {description}
          </motion.p>
        </div>
        <div className="flex flex-row relative justify-around">
          <motion.button
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            onClick={() => window.open(codeLink, "_blank")}
            className="relative z-60 border-2 border-slate-800 md:text-sm lg:text-base ml-2 md:ml-4 mr-3 md:mb-2 mt-2 md:mt-4 px-3 md:px-5 md:py-2 rounded-b-2xl flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-800 hover:to-indigo-900 hover:text-[#EBE4D1]"
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
            className="relative z-60 border-2 border-slate-800 md:text-sm lg:text-base ml-2 md:ml-4 -mr-3 md:mb-2 mt-2 md:mt-4 px-4 py-2 md:px-5 rounded-b-2xl flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-800 hover:to-indigo-900 hover:text-[#EBE4D1]"
          >
            <span>Live View</span>
            <FiArrowRight className=" group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 my-2 border-2 border-[#fac003] rounded-3xl bg-gradient-to-r from-[#644bf2] to-transparent"
      />
      <div className="absolute my-1 inset-0 z-0 border-4 border-[#231a5e] bg-[#6A5ACD] rounded-3xl bg-opacity-90" />
    </motion.div>
  );
};

export default MainProjectsDisplay;
