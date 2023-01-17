import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { ShortsContext, VidioContext } from "./context";
import FirstMassiv from "./utilities/backend1";
export const ThemeContext = createContext();
function App() {
  const [Vidio, SetVidio] = useState(FirstMassiv);
  const [state, SetState] = useState("light");
  const Theme = {
    light: {
      bg: "white",
      text: "black",
    },
    dark: { bg: "#303030", text: "white" },
  };
  return (
    <VidioContext.Provider value={{ Vidio, SetVidio }}>
      <ShortsContext.Provider value={"a"}>
        <ThemeProvider theme={Theme[state]}>
          <ThemeContext.Provider value={{ state, SetState }}>
            {" "}
            <Navbar />
            <div style={{ display: "flex", background: "black" }}>
              <Sidebar />
              <Body />
            </div>
          </ThemeContext.Provider>
        </ThemeProvider>
      </ShortsContext.Provider>
    </VidioContext.Provider>
  );
}

export default App;
