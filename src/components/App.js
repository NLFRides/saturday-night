import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { sort } from "../actions";
import { DragDropContext } from "react-beautiful-dnd";
import SplitPane from "react-split-pane";
import Header from "./header/Header";
import CarsGrid from "./car/CarsGrid";
import UnassignedRidersGrid from "./rider/UnassignedRidersGrid";
import TrashCan from "./header/TrashCan";

function App() {

  const [trashCan, setTrashCan] = useState({visible: false, type: null});

  const dispatch = useDispatch();

  const onDragStart = (result) => {
    const type = result.type;
    setTrashCan({ visible: true, type: type });
  };

  const onDragEnd = (result) => {
    setTrashCan({ ...trashCan, visible:false });
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
          <Header trashCan={trashCan} />
        </div>
        { (trashCan.visible) ? <TrashCan trashType={trashCan.type}/> : null }
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