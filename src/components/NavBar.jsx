import React, {useState} from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, useScroll, useMotionValueEvent} from "framer-motion"




const Link =({children, page, selectedPage, setSelectedPage})=>{
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, '');
  return(
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow-400" : ""}
      hover:text-yellow-400 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={()=>{
        setSelectedPage(lowerCasePage)
        window.history.pushState({}, '', `#${lowerCasePage}`)
      }}
  >
    <div>
      {children}
      {page}
    </div>
  </AnchorLink>
  )
}
const NavBar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
  const { scrollY } = useScroll();
  const [hidden,setHidden] = useState(false);
  const navBarBackground = isTopOfPage ? "" : "bg-red";
  const[nav, setNav] = useState(false)

  //hide navBar when scrolling
  useMotionValueEvent(scrollY, "change", (latest)=>{ 
    const previous = scrollY.getPrevious();
    if(previous < latest && latest > 150){
      setHidden(true)}
    else{
      setHidden(false)
    }
  });

  const handleNav =()=>{
    setNav(!nav)
  }


  return(
    
      <motion.nav 
      variants={{
        visible:{ y:0 }, 
        hidden:{ y:"-190%"},
      }}
      animate={hidden? "hidden" : "visible"}
      transition={{duration:0.4, ease:"easeInOut"}}
      className={`${navBarBackground} w-full text-[#EBE4D1] z-40 fixed top-6`}>
        <div className= "flex justify-center px-4">
          <ul className="hidden  md:flex flex-row  mt-3 p-4 gap-10 uppercase rounded-full bg-[#7B68EE] bg-opacity-30 backdrop-blur-md border-b border-gray-800">
            <Link
            page="Home"
            selectedPage = {selectedPage}
            setSelectedPage ={setSelectedPage}/>
            <Link
            page="About"
            selectedPage = {selectedPage}
            setSelectedPage ={setSelectedPage}/>
            <Link
            page="Skills"
            selectedPage = {selectedPage}
            setSelectedPage ={setSelectedPage}/>
            <Link
            page="Projects"
            selectedPage = {selectedPage}
            setSelectedPage ={setSelectedPage}/>
            <Link
            page="Contact Me"
            selectedPage = {selectedPage}
            setSelectedPage ={setSelectedPage}/>
          </ul>
          {/* Mobile NavBar */}
          <div onClick={handleNav} className="flex justify-end items-end md:hidden ">
            {!nav ?<div className="flex rounded-full bg-gradient-to-r from-purple-400 to-[#7B68EE] p-3"><AiOutlineMenu/></div>:<div className="rounded-full bg-gradient-to-r from-purple-400 to-[#7B68EE] items-center p-3"><AiOutlineClose/></div>}
          </div>
          <div className={!nav ? "fixed left-[-100%]":"fixed bg-[#000300] h-full w-[%60] left-0 top-0 border-r border-r-gray-800 ease-in-out duration-600 md:hidden z-100"}>
            <h1 className="text-[#7B68EE] font-burtons text-3xl font-bold pt-6 p-4">NU</h1>
            <ul className="flex flex-col  gap-6 p-4 uppercase">
              <Link
                page="Home"
                selectedPage = {selectedPage}
                setSelectedPage ={setSelectedPage}
                className="p-4 border-b border-gray-600"/>
              <Link
                page="About"
                selectedPage = {selectedPage}
                setSelectedPage ={setSelectedPage}
                className="p-4 border-b border-gray-600"/>
              <Link
                page="Skills"
                selectedPage = {selectedPage}
                setSelectedPage ={setSelectedPage}
                className="p-4 border-b border-gray-600"/>
              <Link
                page="Projects"
                selectedPage = {selectedPage}
                setSelectedPage ={setSelectedPage}
                className="p-4 border-b border-gray-600"/>
              <Link
                page="Contact Me"
                selectedPage = {selectedPage}
                setSelectedPage ={setSelectedPage}
                className="p-4 border-b border-gray-600"/>
            </ul>
          </div>
        </div>
      </motion.nav>
  )
};

export default NavBar;

//[#7B68EE]