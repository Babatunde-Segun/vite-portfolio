import React from "react";
import Navbar from "../NavbarThing/NavbarContainer";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import "./Home.css";
import ProjectsBtn from "../ProjectsBtn";
import CountUp from "react-countup";

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

          {/* Countup Section */}
          <div className="my-[3rem] text-[1.5rem] sm:text-3xl flex gap-[5rem]  flex-wrap">
            <div className="  text-[orangered] ">
              <div className="flex gap-1">
                <CountUp
                  start={0}
                  end={2}
                  delay={3}
                  duration={5}
                  className="text-[3rem] font-[700] mb-[1rem]"
                />
                +
              </div>
              <p className="text-[1.3rem] sm:text-xl text-[white]">
                Years of Experience
              </p>
            </div>

            <div className=" lg:text-3xl text-[orangered]">
              <div className="flex gap-1">
                <CountUp
                  start={0}
                  end={20}
                  delay={1}
                  duration={5}
                  className="text-[3rem] font-[700] mb-[1rem]"
                />
                +
              </div>
              <p className="text-[1.3rem] sm:text-xl text-[white]">Projects</p>
            </div>
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
