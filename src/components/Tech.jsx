import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechFlow = () => {
  const flowRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const flow = flowRef.current;
    const techItems = flow.children;

    // Calculate total width including gaps
    const totalWidth = Array.from(techItems).reduce((acc, item) => acc + item.offsetWidth + 24, 0);

    // Clone tech items for a seamless loop
    const clonedItems = Array.from(techItems).map(item => item.cloneNode(true));
    clonedItems.forEach(item => flow.appendChild(item)); // Append cloned items

    // Create GSAP animation for seamless scrolling
    animationRef.current = gsap.to(flow, {
      x: `-=${totalWidth}`,
      ease: "none",
      duration: 20, // Adjust duration for speed
      repeat: -1, // Repeat indefinitely
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    // Clean up animation on unmount
    return () => {
      animationRef.current.kill();
    };
  }, []);

  // Pause on mouse enter, resume on mouse leave
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div 
        ref={flowRef} 
        className="flex gap-10" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {technologies.map((technology) => (
          <div className='w-[120px] h-[120px] flex-shrink-0' key={technology.name}>
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-full h-full object-contain invert brightness-[1.2] saturate-[1.2] contrast-[1] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6'>
      <TechFlow />
    </div>
  );
};

export default SectionWrapper(Tech, "");
