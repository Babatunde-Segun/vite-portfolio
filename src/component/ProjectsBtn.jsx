// next image
// import Image from "next/image";

// next link
// import { Link } from "react-dom";
import { Link } from "react-router-dom";
// import bgStar from "../assets/circleStar.svg";
import roundedText from "../assets/rounded-text.png";
import roundedText1 from "../assets/rounded-text-fotor.png";
import projectText from "../assets/project.png";

// icons
import { HiArrowRight } from "react-icons/hi2";
import { HiArrowLongDown } from "react-icons/hi2";
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
{
  /* <HiArrowLongDown />; needed for down btn */
}

const ProjectsBtn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <a
      href="#portfolio"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <div className="relative w-[30px] h-[38px] flex justify-center items-center  bg-cover bg-center bg-no-repeat group">
        {theme.palette.mode === "light" && (
          <>
            <img
              src={roundedText1}
              alt=""
              className="projectBtn  max-w-[100px] max-h-[108px]"
              loading="lazy"
            />
            <HiArrowLongDown className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300 ease" />
          </>
        )}

        {theme.palette.mode === "dark" && (
          <>
            <img
            loading="lazy"
              src={roundedText}
              alt=""
              className="projectBtn  max-w-[100px] max-h-[108px]"
            />
            <HiArrowLongDown className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300 ease" />
          </>
        )}
      </div>
    </a>
  );
};

export default ProjectsBtn;
