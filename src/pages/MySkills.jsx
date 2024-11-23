import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import SkillsMotion from "../components/SkillsMotion"
import Tech from "../components/Tech"

const MySkills = () => {
	return (
		<section
			id='skills'
			className='w-4/6 mx-auto mt-2 pb-20 text-[#EBE4D1] relative'
		>
			<div className=''>
				{/* HEADER AND IMAGE SECTION */}
				<div className='flex flex-col md:flex-row justify-between gap-14  md:mt-28'>
					<motion.div
						className='md:w-2/3'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<h1 className='font-semibold font-sans text-4xl mb-3 p-3 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl '>
							Technical <span className='text-[#7B68EE]'>SKILLS</span>
						</h1>
						<p className='mt-10 mb-6 bg-black/30 backdrop-blur-sm space-y-5 text-sm md:text-lg rounded-md p-5'>
							Alongside my mastered skills in leveraging{" "}
							<span className='text-[#dfbe76]'>ChatGPT</span> and the art
							of efficient{" "}
							<span className='text-[#dfbe76]'>Googling</span>. I invite
							you to explore my other proficiencies below!
						</p>
					</motion.div>
					<motion.div
						className='md:flex md:flex-col md:justify-start items-center md:mt-8 md:w-5/6'
						initial='hidden'
						whileInView='visible'
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
			<div className='flex flex-col md:flex-row md:justify-between items-start md:space-x-10 my-6 text-sm md:text-base'>
				{/* EXPERIENCE */}

				<SkillsMotion number='01' title='Programming Languages'>
					<ul className='bg-black/40 backdrop-blur-sm space-y-5 rounded-md p-6 '>
						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								JavaScript/TypeScript:{" "}
							</span>{" "}
							Due to my expertise in both front-end(React) and back-end
							development(NodeJS), Javascript is my go-to.
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Python:{" "}
							</span>{" "}
							Efficient programmer for web scraping(BS4), data
							manipulation(Pandas), and exploration, leveraging Python’s
							extensive and versatile library ecosystem.
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								C#:{" "}
							</span>{" "}
							Strong knowledge of .NET frameworks such as Asp.Net and
							.Net Core
						</li>
					</ul>
				</SkillsMotion>

				<SkillsMotion number='02' title='Frameworks/Libaries'>
					<ul className='bg-black/40 backdrop-blur-sm space-y-5 rounded-md p-6'>
						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								{" "}
								NextJS/React:{" "}
							</span>{" "}
							I specialize in crafting dynamic, responsive user
							interfaces with a focus on performance and reusable
							components.
						</li>

						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								{" "}
								Zustand/Redux:{" "}
							</span>{" "}
							Redux Toolkit for efficient state slicing and leverage
							Redux Query for seamless data fetching and caching,
							ensuring optimal store management.
						</li>
						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								ExpressJS:{" "}
							</span>{" "}
							To conveniently build scalable server-side applications,
							harnessing its routing and middleware capabilities .{" "}
						</li>
						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								TRPC:{" "}
							</span>{" "}
							To ship full-stack appilcations quickily with front-to-back
							end type safety
						</li>
						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Tailwind CSS:{" "}
							</span>{" "}
							Rapid and responsive design.{" "}
						</li>
					</ul>
				</SkillsMotion>
				{/* IMAGINATIVE */}
				<SkillsMotion number='03' title='Other Technologies'>
					<ul className='bg-black/40 backdrop-blur-sm space-y-5 rounded-md p-6'>
						<li>
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Cloud Services:{" "}
							</span>{" "}
							Experience with cloud platforms like AWS.
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Docker & Kubernetes:{" "}
							</span>{" "}
							Fundamental knowledge of environment consistency and
							application management at scale.
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Relational Databases:{" "}
							</span>{" "}
							Designed schemas, crafted complex SQL queries, and
							optimized databases for scalability using PostgreSQL
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Non-Relational Databases:{" "}
							</span>{" "}
							Thanks to the user-friendly MongoDB Atlas, I can quickly
							create flexible data models with MongoDB and DynamoDB
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Github and Git:{" "}
							</span>{" "}
							Capable of version control to scale existing projects. I
							also have a strong familiarity with collaboritve workflows.
						</li>
						<li>
							{" "}
							<span className='font-bold text-base md:text-lg text-[#dfbe76]'>
								Hosting Services:{" "}
							</span>{" "}
							Web deployment using Vercel, Hostinger and Heroku.
						</li>
					</ul>
				</SkillsMotion>
			</div>
		</section>
	)
}

export default MySkills
