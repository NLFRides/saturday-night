import React from "react";
import "./App.css";
import { connect } from "react-redux";
import AddButton from "./components/AddButton";
import { DragDropContext } from "react-beautiful-dnd";
import SplitPane from "react-split-pane";
import Car from "./components/Car";

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
  },
  carsGrid: {
    display: "flex",
    flexDirection: "row"
  }
}

function App(state) { 

  const onDragEnd = () => {

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div style={styles.header}>
          <AddButton type="car"></AddButton>
          <AddButton type="rider"></AddButton>
        </div>
        <div style={styles.carsGrid}>
          { state.cars.map(car => <Car key={car.id} carID={car.id} driverName={ car.driverName } riders = { car.riders }></Car>) }
        </div>
      </div>
    </DragDropContext>
  )
};

const mapStateToProps = state => ({
  cars: state.cars
});

export default connect(mapStateToProps)(App);
