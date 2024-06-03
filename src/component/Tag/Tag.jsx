import React from "react";
import classes from "./Tag.module.css";
import { PiStarFourFill } from "react-icons/pi";

function Tag({ children }) {
  return (
    <div className={classes.tag}>
      <PiStarFourFill />
      {children}
    </div>
  );
}

export default Tag;
