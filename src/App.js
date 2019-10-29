import React from "react";
import "./App.css";
import SplitPane from "react-split-pane";
import RightWrapper from "./components/rightWrapper"
import LeftWrapper from "./components/leftWrapper"

function App() {
  return (
    <div className="Resizer">
      <SplitPane split="vertical" minSize={50} defaultSize={500}>
        <LeftWrapper/>
        <RightWrapper/>
      </SplitPane>
    </div>
  );
}

export default App;
