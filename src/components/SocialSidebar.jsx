import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { MdContactPage } from "react-icons/md"
import resume from "../assets/SWE_Resume3425.pdf"

function SocialSidebar() {
	const githubLink = "https://github.com/ueharaneal"
	const linkedinLink = "https://www.linkedin.com/in/nealuehara/"
	return (
		<div className='flex flex-col fixed top-[50%] translate-y-[-50%] left-0 z-40'>
			<button
				onClick={() => window.open(githubLink, "_blank")}
				className='flex flex-row items-center space-x-6 pl-12 bg-gray-700 rounded-xl text-white z-50 left-0 transform -translate-x-2/3 hover:translate-x-0 hover:text-yellow-400 duration-300'
			>
				<span>Github</span>
				<FaGithubSquare size={64} className='rounded-xl -mr-5' />
			</button>
			<button
				onClick={() => window.open(linkedinLink, "_blank")}
				className='flex flex-row  items-center space-x-6 pl-9  bg-gray-700 rounded-xl text-white z-50 left-0 transform -translate-x-2/3 hover:translate-x-0 hover:text-yellow-400 duration-300'
			>
				<span>Linkedin</span>
				<FaLinkedin size={63} className='rounded-xl -mr-5' />
			</button>

			<button
				onClick={() => window.open(resume, "_blank")}
				className='flex flex-row  items-center space-x-6 pl-9 mr-1 bg-gray-700 rounded-xl text-white z-50 left-0 transform -translate-x-2/3 hover:translate-x-0 hover:text-yellow-400 duration-300'
			>
				<span>Resume</span>
				<MdContactPage size={63} className='rounded-xl -mr-5' />
			</button>
		</div>
	)
}

export default SocialSidebar
