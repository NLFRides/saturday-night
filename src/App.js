import React from "react";
import "./App.css";
import { connect } from "react-redux";
import SplitPane from "react-split-pane";
import Car from "./components/Car";

function App(state) { 
  
  console.log(state.cars);

  return (
    <div>
      {/* <SplitPane split="vertical" minSize={100} defaultSize={700} > */}
        { state.cars.map(car => <Car title={car.title}></Car>) }
      {/* </SplitPane> */}
    </div>
  )
};

const mapStateToProps = state => ({
  cars: state.cars
});

export default connect(mapStateToProps)(App);
