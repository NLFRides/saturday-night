import React from 'react';

import { Droppable } from "react-beautiful-dnd";
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { TRASH_CAN_ID } from "../../constants";

const TrashCan = ({ trashType }) => {

  return (
    <Droppable droppableId={TRASH_CAN_ID} type={trashType}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Paper variant="outlined">
            <DeleteIcon/>
          </Paper>
        </div>
      )}
    </Droppable>
  )
};

export default TrashCan;