import React from "react";
import { useTheme } from "@mui/material";
import classes from "./Button.module.css";

function Button({ children }) {
  return <div className={classes.btn}>{children}</div>;
}

export default Button;
