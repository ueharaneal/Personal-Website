import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Link = ({ children, page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase().replace(/\s+/g, "")
	return (
		<AnchorLink
			className={`${selectedPage === lowerCasePage ? "text-yellow-400" : ""}
      hover:text-yellow-400 transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => {
				setSelectedPage(lowerCasePage)
				window.history.pushState({}, "", `#${lowerCasePage}`)
			}}
		>
			<div>
				{children}
				{page}
			</div>
		</AnchorLink>
	)
}
const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)
	const navBarBackground = isTopOfPage ? "" : "bg-red"

	//hide navBar when scrolling
	useMotionValueEvent(scrollY, "change", latest => {
		const previous = scrollY.getPrevious()
		if (previous < latest && latest > 150) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: "-190%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			className={`${navBarBackground} w-full text-[#EBE4D1] z-40 fixed top-6`}
		>
			<div className='flex justify-center px-4'>
				<ul className='hidden md:flex flex-row mt-3 p-4 gap-10 uppercase rounded-full bg-[#7B68EE] bg-opacity-30 backdrop-blur-md border-b border-gray-800'>
					{/* Assuming you have a custom Link component */}
					<Link
						page='Home'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='About'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='Skills'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='Projects'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<Link
						page='Contact Me'
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				</ul>
			</div>
		</motion.nav>
	)
}

export default NavBar


//[#7B68EE]
