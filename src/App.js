import React from "react";

import { useDispatch } from "react-redux";
import { sort } from "./actions";
import { DragDropContext } from "react-beautiful-dnd";
import SplitPane from "react-split-pane";
import Header from "./components/Header";
import CarsGrid from "./components/CarsGrid";
import UnassignedRidersGrid from "./components/UnassignedRidersGrid";

function App() { 

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
        <div>
          <Header/>
        </div>
        <div>
          <SplitPane allowResize={false} split="vertical" minSize={300} defaultSize={400} style={{backgroundColor: '#d8ecf9'}}>
            <div>
              {/* Eventaully, move headers into here. prob make components called ridersHeader and carsHeader, maybe masterHeader idk */}
              <UnassignedRidersGrid/>
            </div>
            <div >
              <CarsGrid/>
            </div>
          </SplitPane>
        </div>
      </div>
    </DragDropContext>
  )
};

export default App;