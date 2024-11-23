import React, { useRef } from "react"
import MainProjectsDisplay from "../components/MainProjectsDisplay"
import { motion } from "framer-motion"
import PassionProjectDisplay from "../components/PassionProjectDisplay"

function Projects() {
	const ref = useRef(null)

	return (
		<section
			ref={ref}
			id='projects'
			className='mx-auto max-w-7xl flex justify-center h-full relative'
		>
			<div className='flex flex-col justify-center mt-28 2xl:mt-0 md:mt-6'>
				<motion.h1
					initial={{ x: -200, scale: 0.5 }}
					animate={{ x: 0, scale: 1 }}
					transition={{ duration: 0.8 }}
					className='text-3xl md:text-4xl text-white mt-24 md:mt-0  mb-2 md:mb-12 ml-10 font-semibold font-sans p-7 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit text-center md:text-left'
				>
					{" "}
					MY <span className='text-[#7B68EE] ml-2'>PROJECTS</span>
				</motion.h1>
				<PassionProjectDisplay />
				<MainProjectsDisplay className='' />
			</div>
		</section>
	)
}

export default Projects
