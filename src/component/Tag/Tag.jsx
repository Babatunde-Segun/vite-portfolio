import React from "react";
import classes from "./Tag.module.css";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// const colors = tokens(theme.palette.mode);
import { useContext } from "react";

function Tag({ children, width = "7rem" }) {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <motion.div
      variants={fadeIn()}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className={classes.tag}
      style={{
        width: `${width}`,
        color: colors.orange[600],
        backgroundColor: colors.grey[700],
      }}
    >
      <PiStarFourFill />
      {children}
    </motion.div>
  );
}

export default Tag;
