import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./component/Navbar";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <p>color</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            aliquid facilis corrupti officia possimus deserunt placeat error
            soluta at earum! Exercitationem nobis numquam nisi laudantium odio
            eveniet autem nulla laborum.
          </p>
          <Navbar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
