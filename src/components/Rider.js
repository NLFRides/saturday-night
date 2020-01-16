import React from "react";
import { useSelector } from "react-redux";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import { Draggable } from "react-beautiful-dnd";

const styles = {
  chip: {
    marginTop: 4,
    marginBottom: 4
  }
}

const handleClick = () => {
  console.log("Clicked rider, edit")
};

const handleDelete = () => {
  console.log('You clicked the delete rider icon.');
};

const Rider = ({ index, riderId }) => {

  const ridersInfo = useSelector(state => state.ridersInfo);

  const {
    id,
    name,
    lunch,
    location,
    notes,
  } = ridersInfo[riderId];

  const riderTooltip = `RIDER: ${name} | ${lunch} | ${location} | ${notes}`;

  return (
    <Draggable draggableId={riderId} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Tooltip title={riderTooltip}>
            <Chip style={styles.chip} label={ name } clickable="true" onClick={ handleClick } onDelete={ handleDelete } color="primary" />
          </Tooltip>
        </div>
      )}
    </Draggable>

  );
}

export default Rider;