import React from "react";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import { Draggable } from "react-beautiful-dnd";

const styles = {
  chip: {
    marginTop: 4,
    marginBottom: 4
  }
}

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Rider = ({ name, riderID, index }) => {

  const riderTooltip = `Rider Tooltip - ${name}`;

  return (
    <Draggable draggableId={riderID} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Tooltip title={riderTooltip}>
            <Chip style={styles.chip} label={ name } onDelete={ handleDelete } color="primary" />
          </Tooltip>
        </div>
      )}
    </Draggable>

  );
}

export default Rider;