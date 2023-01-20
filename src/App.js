import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { Routes, Route } from "react-router-dom";
import {
  AllContext,
  HomeContext,
  MassaContext,
  ShortsContext,
  VidioContext,
} from "./context";
import FirstMassiv from "./utilities/backend1";
import SecondMassiv from "./utilities/backend2";
import Subscribed from "./components/Contexts/Subscribed";
import Shorts from "./components/Contexts/Short";
export const ThemeContext = createContext();
function App() {
  const [Vidio, SetVidio] = useState(FirstMassiv);
  const [Short, SetShort] = useState(SecondMassiv);
  const [mas, SetMas] = useState("all");
  const [state, SetState] = useState("light");
  const [value, SetValue] = useState("");
  const [home, SetHome] = useState("alll");
  const Theme = {
    light: {
      bg: "white",
      text: "black",
    },
    dark: { bg: "#303030", text: "white" },
  };
  return (
    <VidioContext.Provider value={{ Vidio, SetVidio }}>
      <ShortsContext.Provider value={{ Short, SetShort }}>
        <ThemeProvider theme={Theme[state]}>
          <ThemeContext.Provider value={{ state, SetState }}>
            {" "}
            <MassaContext.Provider value={{ mas, SetMas }}>
              <AllContext.Provider value={{ value, SetValue }}>
                <HomeContext.Provider value={{ home, SetHome }}>
                  {" "}
                  <Navbar />
                  <div
                    style={{
                      display: "flex",
                      background: "#212121",
                      height: "100%",
                    }}
                  >
                    {" "}
                    <Sidebar />{" "}
                    <Routes>
                      <Route path="/" element={<Body />} />
                      <Route path="home" element={<Body />} />
                      <Route path="subscribed" element={<Subscribed />} />
                      <Route path="shorts" element={<Shorts/>} />
                    </Routes>
                  </div>
                </HomeContext.Provider>
              </AllContext.Provider>
            </MassaContext.Provider>
          </ThemeContext.Provider>
        </ThemeProvider>
      </ShortsContext.Provider>
    </VidioContext.Provider>
  );
}

export default App;
