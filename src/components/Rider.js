import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import { Draggable } from "react-beautiful-dnd";
import { SOUTH, NORTH, OC } from "../constants";

import { deleteRider } from "../actions";

const styles = {
  southRider: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#7ec0ee",
  },
  northRider: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#a8e4a0",
  },
  ocRider: {
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#a6a6a6",
  },
}

const Rider = ({ index, riderId }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Clicked rider, edit")
  };
  
  const handleDelete = () => {
    dispatch(deleteRider(riderId));
  };

  const ridersInfo = useSelector(state => state.ridersInfo);

  const {
    id,
    name,
    lunch,
    location,
    notes,
  } = ridersInfo[riderId];

  const riderStyles = (function(location) {
    switch(location) {
      case SOUTH: return styles.southRider;
      case NORTH: return styles.northRider;
      case OC: return styles.ocRider;
    }});
  const riderStyle = riderStyles(location);

  const riderTooltip = `RIDER: ${name} | ${lunch} | ${location} | ${notes}`;

  return (
    <Draggable draggableId={riderId} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Tooltip title={riderTooltip}>
            <Chip
              style={ riderStyle }
              label={ name }
              clickable="true"
              onClick={ handleClick }
              onDelete={ handleDelete }
              />
          </Tooltip>
        </div>
      )}
    </Draggable>

  );
}

export default Rider;