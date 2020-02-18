import React from 'react';

import { Droppable } from "react-beautiful-dnd";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TRASH_CAN_ID } from "../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
    },
  },
}));

const TrashCan = ({ deleteType }) => {
  const classes = useStyles();

  return (
    <Droppable droppableId={TRASH_CAN_ID} type={deleteType}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} className={classes.root}>
          <Paper variant="outlined">
            <DeleteIcon/>
          </Paper>
        </div>
      )
      }
    </Droppable>
  )
};

export default TrashCan;