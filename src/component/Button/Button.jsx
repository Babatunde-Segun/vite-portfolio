import React from "react";
import classes from "./Button.module.css";

import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

function Button({
  children,
  width = "100%",
  color = "aqua",
  backgroundColor = "",
  href = "",
}) {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div
      href={href}
      className={classes.btn}
      style={{
        width: `${width}`,
        color: theme.palette.mode === "dark" ? "aqua" : colors.blueAccent[200],
        backgroundColor:
          theme.palette.mode === "dark" ? "" : colors.greenAccent[700],

        borderColor: theme.palette.mode === "dark" ? "" : colors.redAccent[600],
        boxShadow:
          theme.palette.mode === "dark"
            ? `0 5px 5px  ${colors.blueAccent[800]},  10px 15px 10px  ${colors.grey[900]}`
            : `0 5px 5px  ${colors.white[100]},  10px 15px 10px  ${colors.grey[900]}`,
      }}
    >
      {children}
    </div>
  );
}

export default Button;
