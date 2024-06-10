import React from "react";
import { useTheme } from "@mui/material";
import classes from "./Button.module.css";

function Button({
  children,
  width = "100%",
  color = "aqua",
  backgroundColor = "",
}) {
  return (
    <div
      className={classes.btn}
      style={{
        width: `${width}`,
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,

        // border: `${border}`,
      }}
    >
      {children}
    </div>
  );
}

export default Button;
