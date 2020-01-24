import React from "react";

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { UNASSIGNED_RIDERS_GRID_ID, RIDER_TYPE } from "../constants";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import Rider from "./Rider";

const styles = {
  unassignedRidersGrid: {
    margin: 8,
    padding: 8,
    height: 150,
    maxHeight: 150,
    overflow: 'auto',
    columns: "2",
    // display: "flex",
    // justifyContent: "space-between",
  }
}

const UnassignedRidersGrid = () => {

  const unassignedRiders = useSelector(state => state.unassignedRiders);

  return (
    <Droppable droppableId={UNASSIGNED_RIDERS_GRID_ID} direction="vertical" type={RIDER_TYPE}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} >
          <Paper style={styles.unassignedRidersGrid} variant='outlined' >
            <List>
              { unassignedRiders.map((riderId, index) => 
                <Rider 
                  key={riderId} 
                  index={index}
                  riderId={riderId} />)
              }
            </List>
          </Paper>
          {/* {provided.placeholder} */}
        </div>
      )}

    </Droppable>
  );
}

export default UnassignedRidersGrid;