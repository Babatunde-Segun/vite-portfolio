import React from "react";
import Navbar from "../NavbarThing/NavbarContainer";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import "./Home.css";
import ProjectsBtn from "../ProjectsBtn";
import CountUp from "react-countup";
import picture from "../../assets/portrait.avif";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import CountupComponent from "../Countup";
import { fadeIn } from "../variant";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  return (
    <section id="home">
      {/* <Navbar /> */}

      <div className="home-introduction">
        <div
          style={{
            width: "100%",
          }}
        >
          <motion.h1
            variants={fadeIn(100)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="home-primary-header"
          >
            I'm Babatunde Segun <br />A Software <span>Developer</span>
          </motion.h1>

          <div className="detail-flex-container">
            <div className="detail-flex-container-max-width">
              <div className="detail-holding-container">
                <p>specialization:</p>
                <h4>Software development</h4>
              </div>
              <div className="detail-holding-container">
                <p>Based in:</p>
                <h4>Lagos, Nigeria</h4>
              </div>
              <div className="sidebar-icons-container">
                <div>
                  <FaGithub className="sidebar-icon" />
                </div>
                <div>
                  <FaInstagram className="sidebar-icon" />
                </div>
                <div>
                  <FaLinkedinIn className="sidebar-icon" />
                </div>
                <div>
                  <FaXTwitter className="sidebar-icon" />
                </div>
              </div>

              <CountupComponent />

              <div className="sidebar-button-container">
                <Button color="white" backgroundColor="orangered">
                  Download Cv
                  <LiaDownloadSolid />
                </Button>
              </div>
            </div>

            <div className="dpb">
              <ProjectsBtn />
            </div>
          </div>
        </div>
        <div className="home-introduction-img-container">
          <img src={picture} alt="picture" className="home-introduction-img" />
        </div>
      </div>

      <div className="home-main-content">
        <div>
          <Tag>Let's talk</Tag>
          <div>
            <motion.h1
              variants={fadeIn()}
              initial="hidden"
              whileInView="show"
              exit="remove"
              className="home-primary-header"
            >
              I'm Babatunde Segun <br />A Software <span>Developer</span>
            </motion.h1>
          </div>

          {/* Countup Section */}
          <AnimatePresence>
            <CountupComponent />
          </AnimatePresence>

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
