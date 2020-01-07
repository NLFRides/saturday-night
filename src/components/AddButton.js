import React from "react";import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import AddForm from "./AddForm";

const styles = {
  button: {
    margin: 4
  },
}

const AddButton = ({ type }) => {

  const buttonText = (type === "car")? "Add Car" : "Add Rider";
  const buttonColor = (type === "car")? "default" : "primary";
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={styles.button} variant="contained" onClick={handleOpen} color={buttonColor}>
        {buttonText}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        open={open}
        onClose={handleClose}
      >
        <AddForm type={type}/>
      </Modal>
    </div>
  );
};

export default AddButton;