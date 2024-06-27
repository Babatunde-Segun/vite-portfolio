import { useEffect, useState } from "react";
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
import Loader from "./component/loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  const [theme, colorMode] = useMode();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <Loader />
        ) : (
          <div className="app">
            {/* <Navbar /> */}
            <Nav />
            <SideBar />
            <main className="main">
              <Home />
              <Portfolio />
              <About />
              <Resume />
              <Contact />
            </main>
          </div>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
