import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  useEffect(() => {
    // Animating the text and div elements using gsap
    gsap.fromTo(
      ".hero-heading",
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".hero-subtext",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2.25, delay: 0.5, ease: "power4.out" }
    );
  }, []);

  return (
    <section className={`relative w-full h-[100vh]`}>
      <div>
        <div
          className={`absolute top-[70px] sm:top-[10vh] ${styles.paddingX} flex flex-row items-center gap-5 w-full lg:w-[45vw] lg:h-[65vh] 2xl:ml-[12vw]`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#ad4bde]" />
            <div className="w-1 sm:h-50 h-40 lg:h-[400px] violet-gradient" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-white hero-heading`}
            >
              Hi, I'm <span className="text-[#ad4bde]">Shivam</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-300 text-sm hero-subtext`}
            >
              I develop dynamic, full-stack web applications,{" "}
              <br className="sm:block hidden" />
              responsive designs, scalable cloud-based apps,{" "}
              <br className="sm:block hidden" />
              and intuitive user interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[100px] w-full flex justify-center items-center scroll-indicator">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
