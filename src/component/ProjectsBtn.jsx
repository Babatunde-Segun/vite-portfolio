// next image
// import Image from "next/image";

// next link
// import { Link } from "react-dom";
import { Link } from "react-router-dom";
// import bgStar from "../assets/circleStar.svg";
import roundedText from "../assets/rounded-text.png";

// icons
import { HiArrowRight } from "react-icons/hi2";
import { HiArrowLongDown } from "react-icons/hi2";
{
  /* <HiArrowLongDown />; needed for down btn */
}

const ProjectsBtn = () => {
  return (
    <a
      href="#portfolio"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <div className="relative w-[30px] h-[38px] flex justify-center items-center  bg-cover bg-center bg-no-repeat group">
        <img
          src={roundedText}
          alt=""
          className="projectBtn  max-w-[100px] max-h-[108px]"
        />
        <HiArrowLongDown className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300 ease" />
      </div>
    </a>
  );
};

export default ProjectsBtn;
