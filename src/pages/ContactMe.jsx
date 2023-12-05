import {useRef} from 'react'
import {motion} from 'framer-motion'
import ContactForm from '../components/ContactForm'

function ContactMe() {
  const ref = useRef(null);
  return (
    <section ref={ref} id="contactme" className="mt-64 md:mt-0 mx-auto w-4/6 flex flex-col mb-12 relative text-[#EBE4D1]">
      <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:.5, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
         className="font-bold font-sans text-3xl md:text-4xl  mt-4 md:my-6 ml-6 p-7 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit">
          Contact <span className="text-[#7B68EE]"> ME</span>
        </motion.h1>
        <div className='flex justify-center'>
          <ContactForm/>
        </div>
      
    </section>
  )
}

export default ContactMe
