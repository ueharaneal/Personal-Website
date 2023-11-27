import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'


function About() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="about" className='w-5/6 mx-auto md:pt-10 mt:2 pb-24 text-[#EBE4D1] relative'>
      <div className=" text-white">
        <motion.div
            className='font-bold font-sans text-4xl mt-5 mb-5'
          >
            ABOUT <span className='text-[#7B68EE]'> ME</span>
        </motion.div>
        <div className="flex flex-col">
        <motion.div
            className='font-bold font-sans text-3xl mt-5 mb-5 text-[#7B68EE]'
          >
            Summary 
        </motion.div>
        {/* summary img and text */}
        <div className="">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once:false, amount:.5}}
            transition={{duration: 1}}
            variants={{
              hidden:{opacity:0, x:-100},
              visible:{opacity:1, x:0}
            }}
            className="p-7 bg-black/20 backdrop-blur-sm rounded-xl">
            If this changes in master IDKKK K K KEKKDN:OESIDFJ:OESIJF      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae quia porro sunt dolores aut hic ut labore, placeat maxime, alias et non enim aspernatur quis facere harum magnam sed.
            Vero ducimus sequi unde tempore beatae soluta expedita tenetur facere illum in sint libero, eius numquam dolorem maiores earum cumque repellat voluptate ullam nam corporis adipisci delectus amet? Ut, deleniti.
            ga ipsa dolorem ex, totam inventore corporis, ipsum facere quasi culpa quod hic maxime sit molestias! Distinctio vel repellat alias error quaerat fugit officiis et saepe voluptates vitae?
          </motion.div>
          
        </div>
          <motion.div
            className='font-bold font-sans text-3xl mt-5 mb-5 text-[#7B68EE]'
          >
            Experience <span className='text-white'>&</span> Education
        </motion.div>
        {/* experience paragraph and photo */}
        <div>
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once:false, amount:.5}}
            transition={{duration: 1}}
            variants={{
              hidden:{opacity:0, x:-100},
              visible:{opacity:1, x:0}
            }}
            className="p-7 bg-black/20 backdrop-blur-sm rounded-xl">
            If this changes in master IDKKK K K KEKKDN:OESIDFJ:OESIJF      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae quia porro sunt dolores aut hic ut labore, placeat maxime, alias et non enim aspernatur quis facere harum magnam sed.
            Vero ducimus sequi unde tempore beatae soluta expedita tenetur facere illum in sint libero, eius numquam dolorem maiores earum cumque repellat voluptate ullam nam corporis adipisci delectus amet? Ut, deleniti.
            ga ipsa dolorem ex, totam inventore corporis, ipsum facere quasi culpa quod hic maxime sit molestias! Distinctio vel repellat alias error quaerat fugit officiis et saepe voluptates vitae?
          </motion.div>
        </div>
        </div>
      </div>     
    </section>
  );
}

export default About;