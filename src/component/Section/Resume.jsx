import React from "react";
import Tag from "../Tag/Tag";
import "./Resume.css";
import daisy from "../../assets/Daisy.png";
import html from "../../assets/HTMl.png";
import ts from "../../assets/TS.png";
import nextlogo from "../../assets/nextlogo.jpg";
// import js from "../../assets/js.png";
import reactlogo from "../../assets/Reactreal.png";
import jslogo from "../../assets/js.png";

const toolsArray = [
  {
    img: "",
    title: "",
  },
  {
    img: "",
    title: "",
  },
  {
    img: "",
    title: "",
  },
  {
    img: "",
    title: "",
  },
  {
    img: "",
    title: "",
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

      {/* Tools */}
      <div className="resume-tools">
        <h3 className="secondary-heading resume-tools-sc">
          Tools I Proficiently work with
        </h3>
        <img src={reactlogo} alt="" />
      </div>
    </section>
  );
}

export default Resume;
