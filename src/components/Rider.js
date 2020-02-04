import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";
import { SOUTH, NORTH, OC } from "../constants";
import { deleteRider } from "../actions";
import { MyToolTip } from "./ToolTip";

const useStyles = makeStyles({
  root: {
    width: 150,
    margin: 1,
    backgroundColor: props => props.backgroundColor,
  },
});

const Rider = ({ index, riderId }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Clicked rider, edit")
  };
  
  const handleDelete = () => {
    // MOVE THIS INTO A DRAG -> appearing trash can component
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

  const locationColor = (function(location) {
    switch(location) {
      case SOUTH: return "#7ec0ee";
      case NORTH: return "#a8e4a0";
      case OC: return "#a6a6a6";
    }});
  const classes = useStyles({"backgroundColor": locationColor(location)});

  // const lunchPlans = (function(location) {
  //   switch(lunch) {
  //     case LUNCH:
  //     case HOME:
  //     default: undefined
  //   }
  // })
  const lunchPlans = <HomeIcon/>;

  const riderTooltip = notes;

  return (
    <Draggable draggableId={riderId} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <MyToolTip title={riderTooltip}>
            <Chip
              className={classes.root}
              label={ name }
              clickable={ true }
              onClick={ handleClick }
              variant={ (notes)? "outlined" : "default" }
              icon = {lunchPlans}
              />
          </MyToolTip>
        </div>
      )}
    </Draggable>

  );
}

export default Rider;