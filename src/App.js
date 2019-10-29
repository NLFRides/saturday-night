import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <SplitPane split="vertical" minSize={50} defaultSize={1000}>
        <div>H</div>
        <div>H</div>
      </SplitPane>
    </div>
  );
}

export default App;
