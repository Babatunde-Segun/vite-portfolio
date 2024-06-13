import React from "react";
import classes from "./Tag.module.css";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

function Tag({ children, width = "7rem" }) {
  return (
    <motion.div
      variants={fadeIn()}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className={classes.tag}
      style={{
        width: `${width}`,
      }}
    >
      <PiStarFourFill />
      {children}
    </motion.div>
  );
}

export default Tag;
