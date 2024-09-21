import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain p-5 rounded-full bg-[#a1a1a1]" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");