import { useEffect, useRef } from "react";

function ContactMe({ onEnter, onLeave }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onEnter();
      } else {
        onLeave();
      }
    },
        {
        root: null, // viewport is the bounding box
        rootMargin: "0px", // No margin
        threshold: 0.1, // Triggered when 10% is visible
        }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onEnter, onLeave]);

  return (
    <section ref={ref} id="contactme" className="bg-gray-500 h-screen w-screen">
      <div>This is the contact me page</div>
    </section>
  );
}

export default ContactMe;
