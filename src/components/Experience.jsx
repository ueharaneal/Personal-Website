import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div>
      <motion.h2 className="font-bold font-sans text-[#7B68EE]/80 text-3xl mt-5 mb-5">
        Experience
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="p-7 bg-black/20 backdrop-blur-sm rounded-xl"
      >
        {/* Your actual experience content here */}
      </motion.div>
    </div>
  );
}

export default Experience;