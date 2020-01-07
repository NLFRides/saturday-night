import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

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

const AddForm = ({ type }) => {

  const title = (type === "car")? "Add Car" : "Add Rider";

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <TextField id="name-field" label="Name" variant="outlined" />
      { (type === "rider")? <TextField id="location-field" label="Location" variant="outlined" /> : null }
      <Button>Add</Button>
    </div>
  )
};

export default AddForm;