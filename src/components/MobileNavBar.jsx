import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai";

const Link = ({ icon, children, page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, "");
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow-400" : ""}
        hover:text-yellow-400 transition duration-400`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        window.history.pushState({}, "", `#${lowerCasePage}`);
      }}
    >
      <div className="flex items-center">
        {icon && React.cloneElement(icon,{ className: "mr-5", size:32})}
       
      </div>
    </AnchorLink>
  );
};
const MobileNavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const navBarBackground = isTopOfPage ? "" : "bg-red";
  const [nav, setNav] = useState(false);

  //hide navBar when scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous < latest && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-190%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`${navBarBackground} text-[#EBE4D1] z-40 fixed -top-3 w-full text-sm`}
    >
      <div className="flex justify-center  w-full px-7 border-b-4 border-black">
        <ul className="md:hidden flex flex-row justify-around mt-3 px-12 py-5 gap-3 bg-[#282727] bg-opacity-90" >
          <Link
            icon={<AiOutlineHome />}
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            icon={<AiOutlineUser />}
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            icon={<AiOutlineStar />}
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            icon={<AiOutlineProject />}
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            icon={<AiOutlineMessage />}
            page="Contact Me"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </ul>
      </div>
    </motion.nav>
  );
};

export default MobileNavBar;

//[#7B68EE]
