import React from "react";
import Tag from "../Tag/Tag";
import "./Resume.css";

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
        <div className="resume-flex-container-date">2023</div>

        <div className="resume-flex-container-course">
          <h3>B.Sc Physics</h3>
          <p>University of Ibadan, Ibadan, Nigeria</p>
        </div>

        <div className="resume-flex-container-details"></div>
      </div>
    </section>
  );
}

export default Resume;
