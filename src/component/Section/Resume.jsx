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
  return (
    <section id="resume">
      {/* Tag */}
      <Tag>Resume</Tag>

      <h2 className="secondary-heading resume-secondary-heading">
        Education and practical <br /> experience
      </h2>

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
            interpersonal relationships.
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
        <div className="resume-tool-container">
          {toolsArray.map((tool, index) => (
            <div key={index} className="resume-tool-subcontainer">
              <img src={tool.img} alt={tool.title} className="tool-img" />
              <p className="tool-details">{tool.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
