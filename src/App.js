import React from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "./actions";
import { Droppable } from "react-beautiful-dnd";
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

function App() { 
  const cars = useSelector(state => state.cars);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (destination) {
      dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      );
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div style={styles.header}>
          <AddButton type="car"></AddButton>
          <AddButton type="rider"></AddButton>
        </div>
        <Droppable droppableId="all-cars" direction="horizontal" type="car">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={styles.carsGrid}>
              { cars.map((car, index) => 
                <Car 
                  key={car.id} 
                  index={index}
                  carID={car.id} 
                  driverName={ car.driverName } 
                  riders = { car.riders }/>) }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
};

export default App;
