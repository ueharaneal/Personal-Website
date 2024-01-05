import { useRef } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

//contact form component is the contact page 
function ContactMe() {
  const ref = useRef(null);
  return (
    <section
      ref={ref}
      id="contactme"
      className="mt-64 xl:m-48 md:mt-0 mx-auto w-4/6 flex flex-col mb-12 relative text-[#EBE4D1]"
    >
      <div className="flex flex-col justify-center ">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-bold font-sans text-3xl md:text-4xl  mt-4 md:my-6 ml-6 xl:ml-24  p-7 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit"
        >
          Contact <span className="text-[#7B68EE]"> ME</span>
        </motion.h1>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
