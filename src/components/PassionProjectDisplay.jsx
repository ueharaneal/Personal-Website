import React from "react"
import { motion } from "framer-motion"

function PassionProjectDisplay() {
	return (
		<div className='w-full mx-auto flex flex-col text-[#EBE4D1] gap-y-3'>
			<h1 className='text-center text-xl lg:text-4xl bg-black '>
				{" "}
				Connekter{" "}
			</h1>
			<div className='h-52 w-52 bg-white mx-auto text-black'>
				IMAGE HERE{" "}
			</div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={{
					hidden: { x: 100, scale: 0.5 },
					visible: { x: 0, scale: 1 },
				}}
				transition={{ delay: 0.3, duration: 0.6 }}
				className='text-white rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/10 backdrop-blur-sm p-7'
			>
				<span className='font-bold  text-base md:text-lg text-[#fac003]'>
					Technologies Used:
				</span>
				<span className='ml-2 font-medium  text-sm md:text-base text-[#EBE4D1]'>
					Nextjs, TRPC, Typescript
				</span>
			</motion.div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={{
					hidden: { x: 100, scale: 0.5 },
					visible: { x: 0, scale: 1 },
				}}
				transition={{ delay: 0.3, duration: 0.6 }}
				className='text-white rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/10 backdrop-blur-sm p-7'
			>
				<h4 className='font-bold  text-base md:text-lg text-[#fac003]'>
					Description
				</h4>
				<span className='ml-2 font-medium  text-sm md:text-base text-[#EBE4D1]'>
					Connekter connects contracters with jobs
				</span>
			</motion.div>
		</div>
	)
}

export default PassionProjectDisplay
