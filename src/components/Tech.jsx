import React from "react";

import  BallCanvas  from "./canvas/Ball";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 md:gap-8'>
      {technologies.map((technology) => (
        <div className=' w-12 h-12 md:w-16 md:h-16 xl:h-18 xl:w-18' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
