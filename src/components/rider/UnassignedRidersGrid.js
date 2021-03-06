import React from "react";

import { UNASSIGNED_RIDERS_GRID_ID, RIDER_TYPE } from "../../constants";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import Rider from "./Rider";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 8,
    flexGrow: 1,
  },
}));

const UnassignedRidersGrid = () => {
  
  const classes = useStyles();

  const unassignedRiders = useSelector(state => state.unassignedRiders);
  
  return (
    <Droppable droppableId={UNASSIGNED_RIDERS_GRID_ID} direction="horizontal" type={RIDER_TYPE}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} >
          <Grid className={classes.root} container spacing={1} justify="center" >
            { unassignedRiders.map((riderId, index) => 
              <Grid key={riderId} item xs>
                <Rider
                  key={riderId} 
                  index={index}
                  riderId={riderId} />
              </Grid>
              )
            }
          </Grid>
          {provided.placeholder}
        </div>
      )}

    </Droppable>
  );
}

export default UnassignedRidersGrid;