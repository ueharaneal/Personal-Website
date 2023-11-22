import { useEffect, useRef } from "react";

import Terminal from "../components/Terminal"

function ContactMe() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="contactme" className="flex h-screen w-5/6 mx-auto relative ">
      <div className=" text-white mt-10 w-full">
        <h1 className="text-4xl  text-white mb-16 ml-10 font-semibold font-sans">CONTACT<span className="text-[#7B68EE]  ml-2">ME</span></h1>
        <div className="flex flex-row justify-center">
          <Terminal/>
        </div>
        
      </div>
    </section>
  );
}

export default ContactMe;
