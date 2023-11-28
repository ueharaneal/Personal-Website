import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Avatar from "../assets/avatar";
import Experience from "../components/Experience";
import ExperienceTimeline from "../components/ExperienceTimeline";

function About() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="about"
      className="w-4/6 mx-auto md:pt-10 mt:2 pb-16 text-[#EBE4D1] relative"
    >
      <div className=" text-white">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:.5, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
         className="font-bold font-sans text-3xl md:text-4xl mt-5 mb-5 p-7 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit">
          ABOUT <span className="text-[#7B68EE]"> ME</span>
        </motion.h1> 
        <div className="flex flex-col">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            transition={{ delay:.5, duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-bold font-sans text-3xl mt-5 ml-5 mb-5 text-[#7B68EE]/80 p-4 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit">
            Summary
          </motion.h2>

          {/* summary img and text */}
          <div className="flex flex-col items-center md:flex-row mb-24">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="p-5 w[-90%]  md:w-[70%] bg-black/20 backdrop-blur-sm rounded-xl"
            >
              Hey there! I'm all about the adrenaline rush – whether it's from a
              sticking a drop surfing, shredding a snowboard through a blizzard,
              or solving a challenging bug in my code. When I'm not out chasing
              that next big thrill, you can find me lost in a good book, taking
              amazing photos or exploring the latest news in tech, always on the
              hunt to learn something new. Keep scrolling to learn about me!
            </motion.p>
              
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Avatar
                src="https://cdn.lordicon.com/mebvgwrs.json"
                trigger="hover"
                state="hover-wave"
                colors="primary:#121331,secondary:#eac086,tertiary:#4bb3fd,quaternary:#242424,quinary:#7166ee"
                style={{ width: "250px", height: "150px" }}
              />
            </motion.div>

          </div>
          <div>
            {/* experience and education container */}
            <div className="flex flex-col">
              <div className="flex flex-col px-2">
                <div className="flex flex-row justify-center md:justify-end">
                  <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="font-bold font-sans text-4xl mt-5 mb-10 w-fit p-7 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl ">
                    My <span className="text-[#7B68EE]">Timeline</span>
                  </motion.div>
                </div>

                <ExperienceTimeline />
              </div>
             
                {/* education/certifications */}
                <div className="flex flex-col mt-24">
                  <motion.h2 className="font-bold font-sans text-[#7B68EE]/80 text-3xl ml-5 mt-5 mb-2 p-4 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit">
                    Certifications
                  </motion.h2>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, y: 100 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="p-7 bg-black/20 backdrop-blur-sm rounded-xl  justify-between font-bold text-left text-md md:text-xl space-y-7"
                  >
                    <p className="flex justify-between">AWS Cloud Practitioner Certification <span className="mt-5 text-xs md:text-lg text-gray-400">July 2023</span> </p>
                    <p className="flex justify-between">CompTIA A+ <span className="mt-5  text-xs md:text-lg text-gray-400">July 2023</span></p>
                    <p className="mt-3"> Countless of Udemy Courses 😅</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;
