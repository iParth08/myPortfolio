import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../utils/style";
import { services } from "../data";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const About = () => {
  // Service Card Design
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am{" "}
        <span className={`text-[${styles.actionColor}]`}>Shwet Prakash</span>, a
        versatile web developer specializing in JavaScript, React, and Next.js.
        I create scalable web applications with a focus on seamless UI/UX
        design. My expertise extends to Three.js, Framer Motion, and CSS
        animations, enabling me to build interactive and visually engaging user
        experiences. Proficient in both{" "}
        <span className={`text-[${styles.actionColor}]`}>
          front-end frameworks and backend integration
        </span>
        , I deliver high-performance digital solutions.
      </motion.p>

      {/* Services Container */}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
