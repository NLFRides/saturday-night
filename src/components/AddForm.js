import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addCar, addRider } from "../actions";

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column"
  },
}));

function getModalStyle() {
  const top = 30;
  const left = 30;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const AddForm = ({ type, dispatch, onAdd }) => {

  const isRider = (type === "rider");

  const [info, setInfo] = useState({name: '', location: '', lunch: '', notes: ''});

  const handleInputChange = e => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }

  const handleAddCar = () => {
    if (info.name && info.lunch) {
      dispatch(addCar(info.name, info.lunch, info.notes))
      onAdd();
    } else {
      console.log("ask user to input req fields");
    }
  }

  const handleAddRider = () => {
    if (info.name && info.lunch && info.location) {
      dispatch(addRider(info.name, info.lunch, info.location, info.notes))
      onAdd();
    } else {
      console.log("ask user to input req fields");
    }
  }

  const title = isRider? "Add Rider" : "Add Car";

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <TextField 
        id="name-field" 
        name="name" 
        label="Name" 
        variant="outlined" 
        onChange={handleInputChange} />

      <TextField 
        id="lunch-field"
        name="lunch"
        label="Lunch"
        variant="outlined"
        onChange={handleInputChange}/> 

      { isRider? 
      <TextField 
        id="location-field"
        name="location"
        label="Location"
        variant="outlined"
        onChange={handleInputChange}/> 
      : null }

      <TextField 
        id="notes-field"
        name="notes"
        label="Notes"
        variant="outlined"
        onChange={handleInputChange}/> 
      <Button
        onClick={ isRider? handleAddRider : handleAddCar }
      >Add</Button>
    </div>
  )
};

export default connect()(AddForm);