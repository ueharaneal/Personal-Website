import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-purple-500 before:absolute before:w-6 before:h-6
        before:rounded-full before:border-2 before:border-yellow-200 before:left-[-50%]
        before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-gray-500"}
            w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage === "resume" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#resume"
        onClick={() => setSelectedPage("resume")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact me" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#contact me"
        onClick={() => setSelectedPage("contact me")}
      />
    </div>
  );
};

export default DotGroup;
