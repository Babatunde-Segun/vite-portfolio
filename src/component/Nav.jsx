import React, { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
// console.log(Link);

import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

// Navigation data
export const navData = [
  { name: "home", path: "#home", icon: <FaHome /> },
  { name: "portfolio", path: "#portfolio", icon: <FaBriefcase /> },
  { name: "about", path: "#about", icon: <FaUser /> },
  { name: "resume", path: "#resume", icon: <FaFileAlt /> },
  { name: "contact", path: "#contact", icon: <FaEnvelope /> },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const activeSectionRef = useRef("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if (entry.isIntersecting) {
          //   console.log(entry);
          //   console.log(entry.target.id);
          //   setActiveSection(entry.target.id);
          //   console.log(activeSection);
          //   // window.location.hash = `#${entry.target.id}`;
          // }
          if (entry.isIntersecting) {
            activeSectionRef.current = entry.target.id;
            const allNavLink = document.querySelectorAll("nav a");

            console.log(allNavLink);

            document.querySelectorAll("nav a").forEach((link) => {
              link.classList.remove("activeBackGrd");

              link.getAttribute("href") === `#${entry.target.id}`
                ? link.classList.add("activeBackGrd")
                : "";
              console.log(link.getAttribute("href"));

              // link.classList.toggle(
              //   "text-accent",
              //   link.getAttribute("href") === `#${entry.target.id}`
              // );
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
      // console.log(activeSection);
      const style = {
        backgroundColor: "orangered",
      };
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[90px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-xl  md:text-2xl  xl:rounded-full">
        {navData.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={`${
              `#${activeSection}` === link.path
                ? { backgroundColor: "orangered" }
                : ""
            } relative flex items-center group hover:text-accent transition-all duration-300 cursor-pointer`}
          >
            {/* tooltip */}
            <div className="absolute pr-8 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[1rem] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
