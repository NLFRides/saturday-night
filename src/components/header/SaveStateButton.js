import React from "react";
import Button from "@material-ui/core/Button";
import download from "downloadjs";
import { useSelector } from "react-redux";

const styles = {
  button: {
    backgroundColor: "green",
    color: "white",
    margin: 4
  },
}

const SaveStateButton = () => {

  const state = useSelector(state => state);

  const stateJSON = JSON.stringify(state);

  const handleClick = () => {
    download(stateJSON, "testSave.json", "text/json");
  }

  return (
    <div>
      <Button style={styles.button} variant="contained" onClick={handleClick} >
        Save State
      </Button>
    </div>
  );
};

export default SaveStateButton;