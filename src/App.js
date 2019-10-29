import React from "react";
import "./App.css";
import SplitPane from "react-split-pane";

function App() {
  return (
    <div className="Resizer">
      <SplitPane split="vertical" minSize={50} defaultSize={1000}>
        <div>Left Pane</div>
        <div>Right Pane</div>
      </SplitPane>
    </div>
  );
}

export default App;
