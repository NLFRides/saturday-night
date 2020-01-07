import React from "react";
import "./App.css";
import { connect } from "react-redux";
import SplitPane from "react-split-pane";
import Car from "./components/Car";

const App = ({ state }) => {
  
  console.log(state);

  return (
    <div>
      {/* <SplitPane split="vertical" minSize={100} defaultSize={700} > */}
        <Car title="Jason Huang"></Car>
        { state.cars.map(car => <Car title={1}></Car>) }
      {/* </SplitPane> */}
    </div>
  )
};

const mapStateToProps = state => ({
  cars: state.cars
});

export default connect(null)(App);
