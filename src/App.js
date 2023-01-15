import logo from "./logo.svg";
import "./App.css";
import { VidioContext } from "./context";

function App() {
  return (
    <VidioContext.Provider>
      <div className="App">
        <h1>hello</h1>
      </div>
    </VidioContext.Provider>
  );
}

export default App;
