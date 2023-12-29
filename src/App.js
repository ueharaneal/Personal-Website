import React, { useState, useEffect } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import { debounce } from "lodash"

import Home from "./pages/Home"
import About from "./pages/About"
import MySkills from "./pages/MySkills"
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe"

import DotGroup from "./components/DotGroup"
import NavBar from "./components/NavBar"
import MobileNavBar from "./components/MobileNavBar"
import ParticlesBg from "./assets/ParticlesBg"
import SocialSidebar from "./components/SocialSidebar"
import PingButton from "./components/PingButton"

function App() {
	const [selectedPage, setSelectedPage] = useState("home")
	const [isTopOfPage, setIsTopOfPage] = useState(true)
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

	useEffect(() => {
		const handleScroll = debounce(() => {
			// Get the position of each section
			const homePos = document.getElementById("home")?.offsetTop || 0
			const aboutPos = document.getElementById("about")?.offsetTop || 0
			const skillsPos = document.getElementById("skills")?.offsetTop || 0
			const projectsPos = document.getElementById("projects")?.offsetTop || 0
			const contactPos = document.getElementById("contactme")?.offsetTop || 0

			const currentScrollPos = window.scrollY + window.innerHeight / 2 // Center of the screen

			// Determine which section is currently in view
			if (currentScrollPos >= homePos && currentScrollPos < aboutPos) {
				window.history.pushState({}, "", "#home")
				setSelectedPage("home")
			} else if (
				currentScrollPos >= aboutPos &&
				currentScrollPos < skillsPos
			) {
				window.history.pushState({}, "", "#about")
				setSelectedPage("about")
			} else if (
				currentScrollPos >= skillsPos &&
				currentScrollPos < projectsPos
			) {
				window.history.pushState({}, "", "#skills")
				setSelectedPage("skills")
			} else if (
				currentScrollPos >= projectsPos &&
				currentScrollPos < contactPos
			) {
				window.history.pushState({}, "", "#projects")
				setSelectedPage("projects")
			} else if (currentScrollPos >= contactPos) {
				window.history.pushState({}, "", "#contactme")
				setSelectedPage("contactme")
			}
		}, 100)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className='relative'>
			{isAboveMediumScreens ? (
				<NavBar
					isTopOfPage={isTopOfPage}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					className='fixed'
				/>
			) : (
				<MobileNavBar
					isTopOfPage={isTopOfPage}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					className='fixed'
				/>
			)}
			{isAboveMediumScreens && (
				<DotGroup
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					className='fixed z-40 right-0 top-1/2'
				/>
			)}
			{isAboveMediumScreens && (
				<SocialSidebar className='fixed z-50 left-0 top-1/2' />
			)}
			{isAboveMediumScreens && (
				<PingButton
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					className='fixed z-40 right-0 '
				/>
			)}

			{/*Pages */}
			<div className='mx-auto relative flex flex-col '>
				<div className='absolute inset-0 z-0'>
					<ParticlesBg />
				</div>
				<Home className='z-10' />
				<About className='z-10' />
				<MySkills className='z-10' />
				<Projects className='z-10' />
				<ContactMe className='z-10' />
			</div>
			<div className=''>
				<a href='https://lordicon.com/'></a>
			</div>
		</div>
	)
}

export default App
