import { useState } from "react";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { ShortsContext, VidioContext } from "./context";
import FirstMassiv from "./utilities/backend1";
function App() {
  const [Vidio, SetVidio] = useState(FirstMassiv);
  return (
    <VidioContext.Provider value={{Vidio,SetVidio}}>
      <ShortsContext.Provider value={'a'}>
        <Navbar />
        <div style={{ display: "flex",background:'black' }}>
          <Sidebar />
          <Body />
        </div>
      </ShortsContext.Provider>
    </VidioContext.Provider>
  );
}

export default App;
