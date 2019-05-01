import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import ButtonAppBar from "./AppBar";
import TemporaryDrawer from "./Drawer";
function App() {
  const [state, setState] = React.useState({
    left: false
  });

  return (
    <div className="App">
      {TemporaryDrawer({ state, setState, ButtonAppBar })}
      <h2>{`💪`}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
