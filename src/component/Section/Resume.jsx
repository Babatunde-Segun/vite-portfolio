import React from "react";
import Tag from "../Tag/Tag";
import "./Resume.css";
import daisy from "../../assets/Daisy.png";
import html from "../../assets/HTMl.png";
import ts from "../../assets/TS.png";
import nextlogo from "../../assets/nextlogo.jpg";
import tailwind from "../../assets/tailwind.png";
import reactlogo from "../../assets/Reactreal.png";
import jslogo from "../../assets/js.png";
import segun from "../../assets/segun.jpg";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";

const toolsArray = [
  {
    img: reactlogo,
    title: "React",
  },
  {
    img: nextlogo,
    title: "NextJS",
  },
  {
    img: ts,
    title: "TypeScript",
  },
  {
    img: tailwind,
    title: "Tailwind",
  },
  {
    img: daisy,
    title: "Daisy UI",
  },
];

function Resume() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
      <h3
        className="resume-tertiary-heading"
        style={{
          color: colors.grey[200],

          // background:
          //   theme.palette.mode === "dark" ? "" : colors.blueAccent[100],
        }}
      >
        My Education
      </h3>

      <div
        className="resume-flex-container"
        style={{
          borderColor:
            theme.palette.mode === "dark"
              ? colors.grey[100]
              : colors.blueAccent[200],
        }}
      >
        <div className="resume-flex-container-date">2017 - 2023</div>

        <div className="resume-flex-container-course">
          <h3
            style={{
              color:
                theme.palette.mode === "dark"
                  ? colors.grey[100]
                  : colors.blueAccent[100],
            }}
          >
            B.Sc Physics
          </h3>
          <p>University of Ibadan, Ibadan, Nigeria</p>
        </div>

        <div className="resume-flex-container-details">
          <p>
            {/* Through my studies, I've gained a deeper understanding of social
            structures, cultural influences, and the complexities of
            interpersonal relationships.  */}
            Through my studies, I've delved into the intricate world of physics,
            exploring how forces shape our surroundings, how energy flows
            through systems, and the fascinating laws that govern everything
            from tiny particles to massive galaxies. This journey has given me a
            deeper appreciation for the intricate structures of the universe,
            the subtle influences of physical laws on everyday life.
          </p>
        </div>
      </div>

      <h3 className="resume-tertiary-heading work-experience">
        Work Experience
      </h3>

      <div
        className="resume-flex-container"
        style={{
          borderColor:
            theme.palette.mode === "dark"
              ? colors.grey[100]
              : colors.blueAccent[200],
        }}
      >
        <div className="resume-flex-container-date">2024 - current</div>

        <div className="resume-flex-container-course">
          <h3
            style={{
              color:
                theme.palette.mode === "dark"
                  ? colors.grey[100]
                  : colors.blueAccent[100],
            }}
          >
            Frontend Developer{" "}
          </h3>
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
            <div
              key={index}
              className="resume-tool-subcontainer"
              style={{
                borderColor:
                  theme.palette.mode === "dark"
                    ? colors.grey[100]
                    : colors.blueAccent[100],
              }}
            >
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

export default Resume;
