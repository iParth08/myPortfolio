import React from "react";
import { motion } from "framer-motion";
import { styles } from "../utils/style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* rounded ball */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          {/* gradient  verticle line*/}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Prakash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            My work merges sleek web applications <br />
            with fluid motion and user-centric UI/UX
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* scroll-gif */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-2 md:border-4 border-secondary flex justify-center items-start p-1">
            {/* framer-motion */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
