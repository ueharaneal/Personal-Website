import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'


function About() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="about" className='relative w-5/6 mx-auto h-screen'>
      <div className=" text-white">
        <motion.div 
        animate={{ x: [0,100,0]}}
        transition={{ ease:'easeOut', duration: 2}}
        className="">
        If this changes in master IDKKK K K KEKKDN:OESIDFJ:OESIJF      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae quia porro sunt dolores aut hic ut labore, placeat maxime, alias et non enim aspernatur quis facere harum magnam sed.
        Vero ducimus sequi unde tempore beatae soluta expedita tenetur facere illum in sint libero, eius numquam dolorem maiores earum cumque repellat voluptate ullam nam corporis adipisci delectus amet? Ut, deleniti.
        Corporis vero, nostrum dolore pariatur unde ipsam consequuntur amet ex harum necessitatibus consectetur blanditiis eius esse atque. Error at enim accusantium inventore explicabo laborum itaque eius, pariatur dolore magnam velit.
        Commodi placeat aliquid ea consectetur ratione non est accusantium. Nostrum, deleniti atque, iusto eveniet consequuntur veniam eligendi repellat recusandae fugit ad quisquam beatae illum nisi. Error quas in odit distinctio.
        Laudantium a fuga ipsa dolorem ex, totam inventore corporis, ipsum facere quasi culpa quod hic maxime sit molestias! Distinctio vel repellat alias error quaerat fugit officiis et saepe voluptates vitae?
        </motion.div>
      </div>     
    </section>
  );
}

export default About;