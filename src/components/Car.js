import React from "react";
import Rider from "./Rider"
import Tooltip from '@material-ui/core/Tooltip';
import { Droppable, Draggable } from "react-beautiful-dnd";

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 200,
    padding: 4,
    margin: 8
  },
  riders: {
    height: 200,
    rows: 4,
  }
}

const Car = ({ carID, driverName, riders, index }) => {

  const carTooltip = `Info about Car's lunch and jaunts go here - ${driverName}`;

  return (
    <Draggable draggableId={carID} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable droppableId={carID} type="rider">
            {provided => (
              <div style={ styles.container }>
                <Tooltip title={carTooltip}>
                  <h2>{driverName}</h2>
                </Tooltip>
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.riders} >
                  { riders.map((rider, index) => <Rider key={rider.id} riderID={rider.id} index={index}name={ rider.name }></Rider>) }
                  { provided.placeholder }
                </div>
              </div>
            )}
          </Droppable>
        </div>
        )
      }
    </Draggable>

  );
}

export default Car;