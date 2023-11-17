import React, {useState} from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";



const Link =({children, page, selectedPage, setSelectedPage})=>{
  const lowerCasePage = page.toLowerCase();
  return(
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow-400" : ""}
      hover:text-yellow-400 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={()=>setSelectedPage(lowerCasePage)}
  >
    <div>
      {children}
      {page}
    </div>
  </AnchorLink>
  )
}
const NavBar = ({isTopOfPage, selectedPage, setSelectedPage}) => {

  const navBarBackground = isTopOfPage ? "" : "bg-red";
  const[nav, setNav] = useState(false)
  const handleNav =()=>{
    setNav(!nav)
  }
  return(
    <nav className={`${navBarBackground} text-[#EBE4D1] w-full z-40 fixed top-0`}>
      <div className= "flex justify-between items-center px-4 mx-auto w-5/6 border-b border-gray-800">
        <h1 className="w-full font-skranji text-[#7B68EE] text-3xl font-bold p-4 md:text-4xl">NU</h1>
        <ul className="hidden  md:flex flex-row p-4 gap-10 uppercase">
          <Link
           page="Home"
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
           page="Resume"
           selectedPage = {selectedPage}
           setSelectedPage ={setSelectedPage}/>
          <Link
           page="Contact Me"
           selectedPage = {selectedPage}
           setSelectedPage ={setSelectedPage}/>
        </ul>
        {/* Mobile NavBar */}
        <div onClick={handleNav} className="block md:hidden ">
          {!nav ?<div className="rounded-full bg-gradient-to-r from-purple-400 to-[#7B68EE] items-center p-3"><AiOutlineMenu/></div>:<div className="rounded-full bg-gradient-to-r from-purple-400 to-[#7B68EE] items-center p-3"><AiOutlineClose/></div>}
        </div>
        <div className={!nav ? "fixed left-[-100%]":"fixed bg-[#000300] h-full w-[%60] left-0 top-0 border-r border-r-gray-800 ease-in-out duration-600 md:hidden "}>
          <h1 className="text-[#7B68EE] font-burtons text-3xl font-bold pt-6 p-4">NU</h1>
          <ul className="flex flex-col  gap-6 p-4 uppercase">
            <Link
              page="Home"
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
              page="Resume"
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
      
      
      
    </nav>
  )
};

export default NavBar;

//[#7B68EE]