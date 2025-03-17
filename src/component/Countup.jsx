import React from "react";
import CountUp from "react-countup";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { useContext } from "react";
// const colors = tokens(theme.palette.mode);

function CountupComponent() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="my-[3rem] text-[1.5rem] sm:text-3xl flex gap-[2rem] sm:gap-[5rem]  flex-wrap">
      <div className="text-[orangered]">
        <div className="flex gap-1">
          <CountUp
            start={0}
            end={3}
            delay={3}
            duration={5}
            className="text-[3rem] font-[700] mb-[0.2rem] sm:mb-[1rem]"
          />
          +
        </div>
        <p
          className="text-[1rem]  sm:text-xl text-[white]"
          style={{
            color:
              theme.palette.mode === "dark"
                ? colors.grey[100]
                : colors.blueAccent[200],
          }}
        >
          Years of Experience
        </p>
      </div>

      <div className=" lg:text-3xl text-[orangered]">
        <div className="flex gap-1">
          <CountUp
            start={0}
            end={20}
            delay={1}
            duration={5}
            className="text-[3rem] font-[700] mb-[0.2rem] sm:mb-[1rem]"
          />
          +
        </div>
        <p
          className="text-[1rem] sm:text-xl text-[white]"
          style={{
            color:
              theme.palette.mode === "dark"
                ? colors.grey[100]
                : colors.blueAccent[200],
          }}
        >
          Projects
        </p>
      </div>
    </div>
  );
}

export default CountupComponent;
