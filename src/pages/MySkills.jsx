import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsMotion from "../components/SkillsMotion";
import Tech from "../components/Tech";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="skills"
      className="w-4/6 mx-auto pt-10 mt-2 pb-24 text-[#EBE4D1] relative"
    >
      <div className="">
        {/* HEADER AND IMAGE SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-14  md:mt-28">
          <motion.div
            className="md:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="font-semibold font-sans text-4xl mb-3 p-3 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl ">
              Technical <span className="text-[#7B68EE]">SKILLS</span>
            </h1>
            <p className="mt-10 mb-6 bg-black/30 backdrop-blur-sm space-y-5 rounded-md p-5">
              Aside from my mastered skills in leveraging ChatGPT and the art of efficient Googling, explore my other proficiencies below!
            </p>
          </motion.div>
          <motion.div
            className="md:flex md:flex-col md:justify-start items-center md:mt-8 md:w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Tech />
          </motion.div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:space-x-10 my-6">
        {/* EXPERIENCE */}

        <SkillsMotion number="01" title="Programming Languages">
          <ul className="bg-black/40 backdrop-blur-sm space-y-5 rounded-md p-6">
            <li>
              <span className="font-bold text-lg text-[#dfbe76]">
                JavaScript:{" "}
              </span>{" "}
              Expert in both front-end and back-end development.
            </li>
            <li>
              {" "}
              <span className="font-bold text-lg text-[#dfbe76]">
                Python:{" "}
              </span>{" "}
              Skilled in writing clean, efficient code for server-side logic,
              data manipulation, and automation.
            </li>
            <li>
              {" "}
              <span className="font-bold text-lg text-[#dfbe76]">
                C#:{" "}
              </span>{" "}
              Skilled in writing clean, efficient code for server-side logic,
              data manipulation, and automation.
            </li>
          </ul>
        </SkillsMotion>
        

        
        <SkillsMotion number="02" title="Web Development">
          <ul className="bg-black/40 backdrop-blur-sm space-y-5 rounded-md p-6">
            <li>
              <span className="font-bold text-lg text-[#dfbe76]"> React: </span>{" "}
              Advanced skills in building interactive UIs HTML5 & CSS3:
              Proficient in crafting responsive designs with a keen eye for
              aesthetics, including experience with CSS
            </li>
            <li>
              <span className="font-bold text-lg text-[#dfbe76]">
                Tailwind CSS:{" "}
              </span>{" "}
              Skilled in using CSS frameworks for rapid and responsive design.{" "}
            </li>
          </ul>
        </SkillsMotion>
        {/* IMAGINATIVE */}
        <SkillsMotion number="03" title="Other Technologies">
          <ul className="bg-black/40 backdrop-blur-sm space-y-5 rounded-md p-6">
            <li>
              <span className="font-bold text-lg text-[#dfbe76]">
                Cloud Services:{" "}
              </span>{" "}
              Experience with cloud platforms like AWS.
            </li>
            <li>
              {" "}
              <span className="font-bold text-lg text-[#dfbe76]">
                Hosting Services:{" "}
              </span>{" "}
              Hostinger and Heroku.
            </li>
            <li>
              {" "}
              <span className="font-bold text-lg text-[#dfbe76]">
                Relational and Non-Relational Databases:{" "}
              </span>{" "}
              Proficeint in mySql and MongoDb. 
            </li>
          </ul>
        </SkillsMotion>
      </div>
    </section>
  );
};

export default MySkills;
