import React, { useEffect, useRef } from 'react';

function About({ onEnter, }) {
  const ref = useRef(null);

  return (
    <section ref={ref} id="about" className='w-screen h-screen bg-blue-500'>
      <div>
        This is the About page
      </div>
    </section>
  );
}

export default About;