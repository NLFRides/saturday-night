import React from "react";
import Rider from "./Rider"
import Tooltip from '@material-ui/core/Tooltip';
import { Droppable } from "react-beautiful-dnd";

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 150,
    padding: 4,
    margin: 8
  }
}

const Car = ({ carID, driverName, riders }) => {
  return (
    <Droppable droppableId={String(carID)}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={ styles.container }>
          <Tooltip title="South | 9:00AM | LIT">
            <h2>{driverName}</h2>
          </Tooltip>
          { riders.map((rider, index) => <Rider key={rider.id} riderID={rider.id} index={index} name={ rider.name }></Rider>) }
          {provided.placeholder}
        </div>
      )}
      
    </Droppable>

  );
}

export default Car;