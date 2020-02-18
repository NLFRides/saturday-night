import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import AddForm from "./AddForm";

const styles = {
  riderButton: {
    backgroundColor: "#7ec0ee",
    margin: 4
  },
  carButton: {
    backgroundColor: "#ccc",
    margin: 4
  },
}

const AddButton = ({ type }) => {

  const buttonText = (type === "car")? "Add Car" : "Add Rider";
  const buttonStyle = (type === "car")? styles.carButton : styles.riderButton;
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={ buttonStyle } variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        open={open}
        onClose={handleClose}
      >
        <AddForm type={type} onAdd={handleClose}/>
      </Modal>
    </div>
  );
};

export default AddButton;