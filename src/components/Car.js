import React from "react";
import Rider from "./Rider"
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 150,
    padding: 4,
    margin: 8
  }
}

const Car = ({ driverName, riders }) => {
  return (
    <div style={ styles.container }>
      <Tooltip title="South | 9:00AM | LIT">
        <h2>{driverName}</h2>
      </Tooltip>
      { riders.map(rider => <Rider key={rider.id} name={ rider.name }></Rider>) }
    </div>
  );
}

export default Car;