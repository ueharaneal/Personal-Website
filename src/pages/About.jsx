import React, { useEffect, useRef } from 'react';

function About({ onEnter, onLeave }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onLeave();
        }
      },
      {
        root: null, // viewport is the bounding box
        rootMargin: '0px', // No margin
        threshold: 0.1 // Triggered when 10% is visible
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
    <section ref={ref} id="about" className='w-screen h-screen bg-blue-500'>
      <div>
        This is the About page
      </div>
    </section>
  );
}

export default About;