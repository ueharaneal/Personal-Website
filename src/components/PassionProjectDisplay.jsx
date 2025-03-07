import React from "react"
import { motion } from "framer-motion"
import connekterImage from "../assets/projectVideos/Screenshot.png"
import { buttonClassname } from "../pages/Home"
import { FiArrowRight } from "react-icons/fi"

function PassionProjectDisplay() {
	return (
		<div className='mx-auto flex flex-col text-[#EBE4D1] gap-y-5  text-center rounded-2xl'>
			<div className=' bg-gradient-to-r from-black-900 to-slate-800 backdrop-blur-md my-4 rounded-2xl'>
				<h1 className='text-center text-3xl lg:text-5xl text-[#7B68EE]'>
					{" "}
					Connekter{" "}
				</h1>
				<p className='lg:text-base text-sm'>
					A Passion Project (In progress..)
				</p>
			</div>
			<div className='flex flex-col gap-y-5 md:flex-row w-full'>
				<div className='w-11/12 bg-white mx-auto  text-black border rounded-xl'>
					<img
						src={connekterImage}
						alt='connekterImage'
						className='border rounded-xl'
					/>
				</div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					variants={{
						hidden: { x: 100, scale: 0.5 },
						visible: { x: 0, scale: 1 },
					}}
					transition={{ delay: 0.3, duration: 0.6 }}
					className='text-white rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/10 backdrop-blur-sm p-7 flex flex-col gap-y-5 text-start mx-3'
				>
					<div className='flex flex-row gap-x-2 items-end'>
						<div className='space-y-2'>
							<h4 className='font-bold  text-base md:text-lg text-[#fac003]'>
								Description
							</h4>
							<p className='ml-2 font-medium  text-sm md:text-base text-[#EBE4D1]'>
								Connekter is a powerful platform that seamlessly
								connects users with skilled contractors, enabling
								efficient job postings and competitive bidding. Users
								can easily post jobs with specific requirements,
								budgets, and deadlines, while contractors have the
								opportunity to review and bid on these jobs.
							</p>
							<div className='flex justify-center gap-x-12'>
								<a
									href='https://github.com/ueharaneal/connekter'
									target='_blank'
									rel='noopener noreferrer'
									className={`${buttonClassname} `}
								>
									See Code{" "}
									<FiArrowRight className='h-7 group-hover:translate-x-4 transition-transform' />
								</a>
								<a
									href='https://connekter-ten.vercel.app/'
									target='_blank'
									rel='noopener noreferrer'
									className={`${buttonClassname}`}
								>
									See Live view{" "}
									<FiArrowRight className='h-7 group-hover:translate-x-4 transition-transform' />
								</a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={{
					hidden: { x: 100, scale: 0.5 },
					visible: { x: 0, scale: 1 },
				}}
				transition={{ delay: 0.3, duration: 0.6 }}
				className='text-white rounded-xl bg-gradient-to-r from-slate-900/50 to-slate-800/10 backdrop-blur-sm p-7 flex flex-col gap-y-5 text-start'
			>
				<div className='flex flex-col lg:flex-row gap-x-2 items-start lg:items-center'>
					<h4 className='font-bold  text-base md:text-lg text-[#fac003]'>
						Technologies Used:
					</h4>
					<p>
						NextJS(App Router), React, TRPC, Drizzle, Supabase, postgis,
						Vercel Ai Sdk, NextAuth, Stripe, Jest and ShadcnUi{" "}
					</p>
				</div>

				<div>
					<p className='font-bold  text-base md:text-lg text-[#fac003]'>
						Key Features:
					</p>
					<ul>
						• User-Centric Job Posting: Users can detail their project
						needs and set parameters for their jobs, ensuring clarity and
						precision in the hiring process.
						<li>
							• Competitive Bidding System: Connekter&apos;s innovative
							bidding system allows users to receive multiple bids from
							contractors, ensuring they get the best possible value for
							their projects.
						</li>
						<li>
							{" "}
							• Contractor Profiles: Contractors can create and manage
							their profiles, showcasing their skills, experience, and
							past work. This feature empowers users to browse through
							various contractors, compare their qualifications, and
							select the right fit for their needs.
						</li>
						<li>
							• User-Friendly Management Tools: The platform provides
							intuitive job management tools, allowing users to track
							progress, communicate with contractors, and manage
							deadlines effectively.
						</li>
						<li>
							• Secure Payment Options: Connekter offers trusted payment
							methods to ensure safe transactions between users and
							contractors.
						</li>
						<li>
							• Contractor Ratings and Reviews: Users can read ratings
							and reviews from previous clients, providing transparency
							and helping them make informed decisions.
						</li>
					</ul>
				</div>
			</motion.div>
		</div>
	)
}

export default PassionProjectDisplay
