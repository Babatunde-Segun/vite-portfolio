import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./component/SideBarComponent";
import Navbar from "./component/NavbarThing/NavbarContainer";
import Home from "./component/Section/Home";
import Portfolio from "./component/Section/Portfolio";
import About from "./component/Section/About";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="main">
            <Home />
            <Portfolio />
            <About />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
