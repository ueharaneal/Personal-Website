import { useEffect, useRef } from "react";

function ContactMe() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="contactme" className="bg-gray-500 h-screen w-screen">
      <div>This is the contact me page</div>
    </section>
  );
}

export default ContactMe;
