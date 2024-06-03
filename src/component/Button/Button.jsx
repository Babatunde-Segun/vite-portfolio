import React from "react";
import { useTheme } from "@mui/material";
import classes from "./Button.module.css";

function Button({ children, width = "100%" }) {
  return (
    <div
      className={classes.btn}
      style={{
        width: `${width}`,

        // border: `${border}`,
      }}
    >
      {children}
    </div>
  );
}

export default Button;
