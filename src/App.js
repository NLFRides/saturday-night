import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { sort } from "./actions";
import { DragDropContext } from "react-beautiful-dnd";
import SplitPane from "react-split-pane";
import Header from "./components/header/Header";
import CarsGrid from "./components/car/CarsGrid";
import UnassignedRidersGrid from "./components/rider/UnassignedRidersGrid";

function App() { 

  const [trashVisible, setTrashVisible] = useState(false);
  const [trashCanType, setTrashType] = useState(null);

  const dispatch = useDispatch();

  const onDragStart = () => {
    console.log("Show Trashcan here");
    console.log("If you do that, hide trashcan onDragEnd");
  };
  
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
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Header/>
        </div>
        <div>
          <SplitPane allowResize={false} split="vertical" minSize={300} defaultSize={300} style={{backgroundColor: '#d8ecf9'}}>
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