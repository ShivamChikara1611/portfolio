import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh]`}>
      <div>
        <div
          className={`absolute top-[70px] sm:top-[80px] ${styles.paddingX} flex flex-row items-center gap-5 w-full lg:w-[45vw] lg:h-[65vh] 2xl:ml-[12vw]`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#ad4bde]" />
            <div className="w-1 sm:h-50 h-40 lg:h-[400px] violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#ad4bde]">Shivam</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-300 text-sm`}>
              I develop dynamic, full-stack web applications,{" "}
              <br className="sm:block hidden" />
              responsive designs, scalable cloud-based apps,{" "}
              <br className="sm:block hidden" />
              and intuitive user interfaces.
            </p>
          </div>
        </div>

        <ComputersCanvas/>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
