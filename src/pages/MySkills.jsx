
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsMotion from "../components/SkillsMotion";
import Tech from '../components/Tech'


const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="w-4/6 mx-auto md:pt-10 mt:2 pb-24 text-[#EBE4D1] relative">
      <div className="">
          {/* HEADER AND IMAGE SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-16  md:mt-28">
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-semibold font-sans text-4xl mt-5 mb-5">
              Technical <span className="text-[#7B68EE]">SKILLS</span>
            </p>
            <p className="mt-10 mb-7">
              Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
              fames odio in at.
            </p>
          </motion.div>
          <motion.div
            className="md:flex md:flex-col md:justify-start md:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: .5, duration: 1 }}
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
      <div className="flex flex-col md:flex-row justify-between md:m-16 my-6 md:gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        />
        
        <SkillsMotion number="01" title="Smart">
          This is the description
        </SkillsMotion>
      
        {/* INNOVATIVE */}
        <SkillsMotion number="02" title="Innovative">
          This is the description
        </SkillsMotion>
        {/* IMAGINATIVE */}
        <SkillsMotion number="03" title="Imaginitive">
          This is the description
        </SkillsMotion>
      </div>
    </section>
  );
};

export default MySkills;
