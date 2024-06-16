import React from "react";
import Tag from "../Tag/Tag";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import { toolsArray } from "./Resume";

export function Resume() {
  return (
    <motion.section
      variants={fadeIn()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      exit="remove"
      id="resume"
    >
      {/* Tag */}
      <Tag>Resume</Tag>

      <h2 className="secondary-heading resume-secondary-heading">
        Education and practical <br /> experience
      </h2>

      {/* education section */}
      <h3 className="resume-tertiary-heading">My Education</h3>

      <div className="resume-flex-container">
        <div className="resume-flex-container-date">2017 - 2023</div>

        <div className="resume-flex-container-course">
          <h3>B.Sc Physics</h3>
          <p>University of Ibadan, Ibadan, Nigeria</p>
        </div>

        <div className="resume-flex-container-details">
          <p>
            Through my studies, I've gained a deeper understanding of social
            structures, cultural influences, and the complexities of
            interpersonal relationships. Through my studies, I've delved into
            the intricate world of physics, exploring how forces shape our
            surroundings, how energy flows through systems, and the fascinating
            laws that govern everything from tiny particles to massive galaxies.
            This journey has given me a deeper appreciation for the intricate
            structures of the universe, the subtle influences of physical laws
            on everyday life, and the interconnectedness of all things through
            fundamental forces and pheno
          </p>
        </div>
      </div>

      <h3 className="resume-tertiary-heading work-experience">
        Work Experience
      </h3>

      <div className="resume-flex-container">
        <div className="resume-flex-container-date">2024 - current</div>

        <div className="resume-flex-container-course">
          <h3>Frontend Developer </h3>
          <p>Freelancer</p>
        </div>

        <div className="resume-flex-container-details">
          <p>
            I built a lot of complex frontend Applications and implemented APIs
            built by senior developers.
          </p>
        </div>
      </div>

      {/* Tools container */}
      <div className="resume-tools">
        <h3 className="secondary-heading resume-tools-sc">
          Tools I Proficiently work with
        </h3>

        {/* Tools array and image */}
        <motion.div
          variants={fadeIn()}
          initial="hidden"
          exit="hidden"
          whileInView="showWithStaggerChildren"
          className="resume-tool-container"
        >
          {toolsArray.map((tool, index) => (
            <div key={index} className="resume-tool-subcontainer">
              <motion.img
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  showWithStaggerChildren: { opacity: 1, scale: 1 },
                }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                src={tool.img}
                alt={tool.title}
                className="tool-img"
              />
              <p className="tool-details">{tool.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
