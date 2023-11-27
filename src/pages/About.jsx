import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Avatar from "../assets/avatar";

function About() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="about"
      className="w-5/6 mx-auto md:pt-10 mt:2 pb-16 text-[#EBE4D1] relative"
    >
      <div className=" text-white">
        <motion.div className="font-bold font-sans text-4xl mt-5 mb-5">
          ABOUT <span className="text-[#7B68EE]"> ME</span>
        </motion.div>
        <div className="flex flex-col">
          <motion.div className="font-bold font-sans text-3xl mt-5 mb-5 text-[#7B68EE]">
            Summary
          </motion.div>

          {/* summary img and text */}
          <div className="flex flex-col items-center md:flex-row mb-24">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="p-5 w-[70%] bg-black/20 backdrop-blur-sm rounded-xl"
            >
              Hey there! I'm all about the adrenaline rush – whether it's from
              a sticking a steep drop surfing, snowboarding during a blizzard,
              or solving a particularly challenging bug in my code. When I'm not
              out chasing that next big thrill, you can find me lost in a good
              book or exploring the latest in tech, always on the hunt for new
              knowledge. Keep scrolling to learn about me!
            </motion.p>

            <Avatar
              src="https://cdn.lordicon.com/mebvgwrs.json"
              trigger="hover"
              state="hover-wave"
              colors="primary:#121331,secondary:#eac086,tertiary:#4bb3fd,quaternary:#242424,quinary:#7166ee"
              style={{ width: "250px", height: "150px" }}
            />
          </div>
          <div>

            {/* experience and education container */}
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col px-2">
                <motion.div className="font-bold font-sans text-[#7B68EE] text-3xl mt-5 mb-5 ">
                  Experience
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="p-7 bg-black/20 backdrop-blur-sm rounded-xl"
                >
                If this changes in master IDKKK K K KEKKDN:OESIDFJ:OESIJF Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
                quia porro sunt dolores aut hic ut labore, placeat maxime, alias
                et non enim aspernatur quis facere harum magnam sed. Vero ducimus
                sequi unde tempore beatae soluta expedita tenetur facere illum in
                sint libero, eius numquam dolorem maiores earum cumque repellat
                voluptate ullam nam corporis adipisci delectus amet? Ut, deleniti.
                ga ipsa dolorem ex, totam inventore corporis, ipsum facere quasi
                culpa quod hic maxime sit molestias! Distinctio vel repellat alias
                error quaerat fugit officiis et saepe voluptates vitae?
              </motion.div>
              </div>

              <div className="flex flex-col px-2">
                <motion.div className="font-bold font-sans text-[#7B68EE] text-3xl mt-5 mb-5 ">
                  Education
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="p-7 bg-black/20 backdrop-blur-sm rounded-xl"
                >
                  If this changes in master IDKKK K K KEKKDN:OESIDFJ:OESIJF Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
                  quia porro sunt dolores aut hic ut labore, placeat maxime, alias
                  et non enim aspernatur quis facere harum magnam sed. Vero ducimus
                  sequi unde tempore beatae soluta expedita tenetur facere illum in
                  sint libero, eius numquam dolorem maiores earum cumque repellat
                  voluptate ullam nam corporis adipisci delectus amet? Ut, deleniti.
                  ga ipsa dolorem ex, totam inventore corporis, ipsum facere quasi
                  culpa quod hic maxime sit molestias! Distinctio vel repellat alias
                  error quaerat fugit officiis et saepe voluptates vitae?
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
