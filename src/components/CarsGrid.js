import React from "react";

import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import Car from "./Car";

const styles = {
  carsGrid: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },
}

const CarsGrid = () => {

  const carsOrder = useSelector(state => state.carsOrder);

  return (
    <Droppable droppableId="carsGrid" direction="horizontal" type="car">
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.carsGrid} >
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

  );

}

export default CarsGrid;