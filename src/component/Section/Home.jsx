import React from "react";
import Navbar from "../NavbarThing/NavbarContainer";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import "./Home.css";
import ProjectsBtn from "../ProjectsBtn";

function Home() {
  return (
    <section id="home">
      <Navbar />

      <div className="home-main-content">
        <div>
          <Tag>Let's talk</Tag>

          <div>
            <h1 className="home-primary-header">
              I'm Babatunde Segun <br />A Software <span>Developer</span>
            </h1>
          </div>

          <div className="home-btn-container">
            <Button width="10rem">My Works</Button>
            <Button width="10rem">CV</Button>
          </div>
        </div>

        <ProjectsBtn />
      </div>
    </section>
  );
}

export default Home;
