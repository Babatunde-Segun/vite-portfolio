import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./component/SideBarComponent";
import Navbar from "./component/NavbarThing/NavbarContainer";
import Home from "./component/Section/Home";
import Portfolio from "./component/Section/Portfolio";
import About from "./component/Section/About";
import Resume from "./component/Section/Resume";
import Contact from "./component/Section/Contact";
import Nav from "./component/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <SideBar />
          <div className="app">
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Resume /> */}
                {/* <Contact /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
