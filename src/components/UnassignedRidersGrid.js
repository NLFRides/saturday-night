import React from "react";

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { UNASSIGNED_RIDERS_GRID_ID, RIDER_TYPE } from "../constants";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import Rider from "./Rider";



import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




const styles = {
  unassignedRidersGrid: {
    margin: 8,
    padding: 8,
    height: 150,
    maxHeight: 150,
    overflow: 'auto',
    columns: "2",
  }
}


const UnassignedRidersGrid = () => {

  const classes = useStyles();

  const unassignedRiders = useSelector(state => state.unassignedRiders);

  return (
    <Droppable droppableId={UNASSIGNED_RIDERS_GRID_ID} direction="horizontal" type={RIDER_TYPE}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} className={classes.root} >
          <Grid container spacing={3}>
            {/* <List> */}
              { unassignedRiders.map((riderId, index) => 
                <Grid item xs>
                
                <Rider 
                  key={riderId} 
                  index={index}
                  riderId={riderId} />
                  </Grid>
                  
                  )
              }
            {/* </List> */}
          </Grid>
          {provided.placeholder}
        </div>
      )}

    </Droppable>
  );
}

export default UnassignedRidersGrid;