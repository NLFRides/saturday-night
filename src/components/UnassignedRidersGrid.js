import React from "react";

import { UNASSIGNED_RIDERS_GRID_ID, RIDER_TYPE } from "../constants";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import Rider from "./Rider";

const styles = {
  unassignedRidersGrid: {
    margin: 8,
    padding: 8,
    columns: "2",
    display: "flex",
    justifyContent: "space-between",
  }
}

const UnassignedRidersGrid = () => {

  const unassignedRiders = useSelector(state => state.unassignedRiders);

  return (
    <Droppable droppableId={UNASSIGNED_RIDERS_GRID_ID} direction="horizontal" type={RIDER_TYPE}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.unassignedRidersGrid} >
          { unassignedRiders.map((riderId, index) => 
            <Rider 
              key={riderId} 
              index={index}
              riderId={riderId} 
              />) }
          {provided.placeholder}
        </div>
      )}

    </Droppable>
  );
}

export default UnassignedRidersGrid;