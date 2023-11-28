import React from 'react'
import { motion } from "framer-motion";

function SkillsMotion({number, title, children}) {
  return (
    <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-bold ml-2 text-2xl md:text-4xl">{number}</p>
              <h3 className="font-playfair font-semibold  text-[#7B68EE] text-2xl ml-3 mt-3 p-3 bg-gradient-to-r from-black/30  to-transparent backdrop-blur-sm rounded-xl">
                {title}
              </h3>
            </div>
          </div>
          <p className="mt-5">
            {children}
          </p>
        </motion.div>
  )
}

export default SkillsMotion
