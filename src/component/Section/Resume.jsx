import React from "react";
import Tag from "../Tag/Tag";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume">
      <Tag>Resume</Tag>

      <h2 className="secondary-heading resume-secondary-heading">
        Education and practical <br /> experience
      </h2>

      <h3 className="resume-tertiary-heading">My Education</h3>
    </section>
  );
}

export default Resume;
