import React from "react";
import Rider from "./Rider"
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { RIDER_TYPE } from "../constants";

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

const Car = ({ index, carId }) => {

  const carsInfo = useSelector(state => state.carsInfo);

  const {
    id,
    driverName,
    lunch,
    riders,
    notes,
  } = carsInfo[carId];

  const carTooltip = `CAR: ${driverName} | ${lunch} | ${notes}`;

  return (
    <Draggable draggableId={carId} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable droppableId={carId} type={RIDER_TYPE}>
            {provided => (
              <div style={ styles.container }>
                <Tooltip title={carTooltip}>
                  <h2>{ driverName }</h2>
                </Tooltip>
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.riders} >
                  { riders.map((riderId, index) => 
                    <Rider key={riderId} riderId={riderId} index={index} ></Rider>) }
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