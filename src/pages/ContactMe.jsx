import {useRef} from 'react'

function ContactMe() {
  const ref = useRef(null);
  return (
    <section ref={ref} id="contactme" className="mx-auto w-5/6 flex justify-center h-screen relative">
      Hello
    </section>
  )
}

export default ContactMe
