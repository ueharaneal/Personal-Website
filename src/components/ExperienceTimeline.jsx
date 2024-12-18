import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdOutlineWork } from "react-icons/md"
import { GiGraduateCap } from "react-icons/gi"
import { FaClipboardQuestion } from "react-icons/fa6"

function ExperienceTimeline() {
	return (
		<div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
					contentArrowStyle={{ borderRight: "7px solid  #fff600" }}
					date='June 2023 - Sept 2023'
					iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
					icon={<MdOutlineWork />}
				>
					<h3 className='vertical-timeline-element-title font-bold text-[#dfbe76] text-lg'>
						Software Engineer Intern
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-sm'>
						Street Sound Society{" "}
					</h4>
					<p>
						Contributed to the remote Raspberry Pi server configuration,
						developed user passcode outputs to ensure seamless integration
						between frontend and backend systems for an enhanced user
						experience, employed React and Tailwind CSS to visually engage
						the client and create user-centric UI components, and gained
						hands-on experience with Amazon DynamoDB, integrating and
						managing the database for seamless data interactions within
						the application.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
					contentArrowStyle={{ borderRight: "9px solid  #fff600" }}
					date='May 2024'
					iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
					icon={<GiGraduateCap />}
				>
					<h3 className='vertical-timeline-element-title font-bold text-[#dfbe76] text-lg'>
						B.S. Software Engineering
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-sm'>
						Western Governors University
					</h4>
					<p>
						Studied essential computer science concepts and mastered the
						fundamentals of multiple programming languages, including C#
						and Python.{" "}
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
					contentArrowStyle={{ borderRight: "9px solid  #fff600" }}
					date='March 2024'
					iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
					icon={<MdOutlineWork />}
				>
					<h3 className='vertical-timeline-element-title font-bold text-[#dfbe76] text-lg'>
						Full-Stack Developer
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-sm'>
						Tramona
					</h4>
					<p>
						I streamlined the homepage to enhance user guidance and
						experience in a fast-paced startup environment, employing the
						T3 tech stack (Next.js, tRPC, Drizzle, Postgres, React Query)
						for high performance, seamless integration, and scalable
						infrastructure. I led the implementation of billing with
						Stripe, managing secure payments and overseeing database
						scalability. Additionally, I integrated and maintained a
						travel insurance API to provide coverage options for trip
						bookings. I focused on enhancing accessibility and SEO using
						Next.js, while delivering a modern interface with Storybook.js
						and Shadcn UI. Throughout, I collaborated with UX designers
						and cross-functional teams on product development,
						contributing to key features and shaping roadmap decisions.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
					contentArrowStyle={{ borderRight: "9px solid  #fff600" }}
					date='Current'
					iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
					icon={<FaClipboardQuestion />}
				>
					<h3 className='vertical-timeline-element-title font-bold text-[#dfbe76] text-lg'>
						What's next?
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-sm'>
						Insert your company.
					</h4>
					<p>
						Enjoyed what you&apos;ve seen? Don&apos;t hesitate to reach
						out through the contact form below!
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	)
}

export default ExperienceTimeline
