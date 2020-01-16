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

  const carsOrder = useSelector(state => state.carsOrder);
  const dispatch = useDispatch();
  
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (destination) {
      dispatch(
        sort(
          draggableId,
          type,
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
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
              <div><h2>Test</h2></div>
              <SplitPane split="vertical" minSize={300} defaultSize={500}>
                <div />
                <div />
              </SplitPane>
              { carsOrder.map((carId, index) => 
                <Car 
                  key={carId} 
                  index={index}
                  carId={carId} 
                  />) }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
};

export default App;