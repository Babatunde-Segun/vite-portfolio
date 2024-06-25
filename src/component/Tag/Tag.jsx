import React from "react";
import classes from "./Tag.module.css";
import { PiStarFourFill } from "react-icons/pi";
import { color, motion } from "framer-motion";
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
        color:
          theme.palette.mode === "dark"
            ? colors.orange[600]
            : colors.white[900],
        backgroundColor:
          theme.palette.mode === "dark"
            ? colors.white[900]
            : colors.orange[600],
      }}
    >
      <PiStarFourFill />
      {children}
    </motion.div>
  );
}

export default Tag;
