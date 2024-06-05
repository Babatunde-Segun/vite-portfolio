import React from "react";
import Tag from "../Tag/Tag";
import "./About.css";
import { Button } from "@nextui-org/react";
import { LiaDownloadSolid } from "react-icons/lia";

function About() {
  return (
    <section id="about">
      <Tag>About Me</Tag>

      <h2 className="secondary-heading">
        Bring <span>ideas </span>
        to Reality
      </h2>

      <div className="about-details-container">
        <div className="about-summary">
          <p className="about-summary-details">
            I'm Segun, a frontend web developer with a knack for React Next.js.
            I've spent the past few years crafting web applications that are not
            only robust and scalable but also a joy to use. I also use AI
            effectively to help my tasks, projects and resources to improve my
            skill in Software development. I thrive on learning new things and
            turning innovative ideas into reality, making tech more accessible
            and effective for everyone.
          </p>
          <Button>
            Download Cv
            <LiaDownloadSolid />
          </Button>
        </div>

        <div className="about-basic-info">
          <div className="basic-info">
            <h6 className="basic-h6">Name</h6>
            <p>Babatunde Segun</p>
          </div>
          <div className="basic-info">
            <h6 className="basic-h6">Phone</h6>
            <p>09039277687</p>
          </div>
          <div className="basic-info">
            <h6 className="basic-h6">Email</h6>
            <p>babatundesegun123@gmail.com</p>
          </div>
          <div className="basic-info">
            <h6 className="basic-h6">Location</h6>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
