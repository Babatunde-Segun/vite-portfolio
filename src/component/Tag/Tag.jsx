import React from "react";
import classes from "./Tag.module.css";
import { PiStarFourFill } from "react-icons/pi";

function Tag({ children, width = "7rem" }) {
  return (
    <div
      className={classes.tag}
      style={{
        width: `${width}`,
      }}
    >
      <PiStarFourFill />
      {children}
    </div>
  );
}

export default Tag;
