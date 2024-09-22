import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6'>
      {technologies.map((technology) => (
        <div className='w-[70px] h-[70px]' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain invert brightness-[1.2] saturate-[1.2] contrast-[1] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-110" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");