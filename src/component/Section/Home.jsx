import React from "react";
import Navbar from "../NavbarThing/NavbarContainer";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import "./Home.css";
import ProjectsBtn from "../ProjectsBtn";
import CountUp from "react-countup";
import picture from "../../assets/portrait.avif";
import segun from "../../assets/segun.jpg";
import Cv from "../../assets/Resume.pdf";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import CountupComponent from "../Countup";
import { fadeIn } from "../variant";
import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <section id="home">
      {/* <Navbar /> */}

      <div className="home-introduction">
        <div
          style={{
            width: "100%",
          }}
        >
          <h1
            variants={fadeIn(100)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="home-primary-header"
          >
            I'm Babatunde Segun <br />A Software{" "}
            <span
              style={{
                // color: `${
                //   theme.palette.mode === "dark"
                //     ? colors.orange[500]
                //     : colors.orange[400]
                // }`,

                color: colors.orange[600],
                textShadow:
                  theme.palette.mode === "dark"
                    ? `0 5px 5px  ${colors.blueAccent[800]}, 10px 15px 100px  ${colors.grey[900]}`
                    : `0 3px 7px  ${colors.white[100]},  4px 4px 100px  ${colors.grey[900]}`,
              }}
            >
              Developer
            </span>
          </h1>

          {/* remenber to add paadding to footer */}
          <div className="detail-flex-container">
            <div className="detail-flex-container-max-width">
              <div className="detail-holding-container">
                <p>specialization:</p>
                <h4
                  style={{
                    color: colors.grey[600],
                  }}
                >
                  Software development
                </h4>
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
                <Button
                  color={colors.white[400]}
                  backgroundColor={colors.orange[500]}
                >
                  <a
                    download={Cv}
                    href={Cv}
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    Download Cv
                    <LiaDownloadSolid />
                  </a>
                </Button>
              </div>
            </div>

            <div className="dpb">
              <ProjectsBtn />
            </div>
          </div>
        </div>
        <div className="home-introduction-img-container">
          <img src={segun} alt="picture" className="home-introduction-img" />
        </div>
      </div>

      <div className="home-main-content">
        <div>
          <Tag>Home</Tag>
          <div>
            <motion.h1
              variants={fadeIn()}
              initial="hidden"
              whileInView="show"
              exit="remove"
              className="home-primary-header"
            >
              I'm Babatunde Segun <br />A Software{" "}
              <span
                style={{
                  color: colors.orange[600],
                  textShadow:
                    theme.palette.mode === "dark"
                      ? `0 5px 5px  ${colors.blueAccent[800]}, 10px 15px 10px  ${colors.grey[900]}`
                      : `0 3px 7px  ${colors.white[100]},  4px 4px 100px  ${colors.grey[900]}`,
                }}
              >
                Developer
              </span>
            </motion.h1>
          </div>

          {/* Countup Section */}
          <AnimatePresence>
            <CountupComponent />
          </AnimatePresence>

          <div className="home-btn-container">
            <a href="#contact">
              <Button
                width="10rem"
                color={
                  theme.palette.mode === "dark"
                    ? colors.orange[300]
                    : colors.blueAccent[800]
                }
              >
                Let's talk
              </Button>
            </a>
            <a
              onClick={() => {
                window.confirm("you want to download my Resume");
              }}
              download={Cv}
              href={Cv}
            >
              <Button width="10rem">CV</Button>
            </a>
          </div>
        </div>

        <ProjectsBtn />
      </div>
    </section>
  );
}

export default Home;
