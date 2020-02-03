import React from "react";
import Button from "@material-ui/core/Button";
import ReactFileReader from 'react-file-reader';
import { useDispatch } from "react-redux";

const styles = {
  button: {
    backgroundColor: "green",
    color: "white",
    margin: 4
  },
}

const LoadStateButton = () => {

  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    console.log(JSON.parse(event.target.result));
  };

  const dispatch = useDispatch();

  const handleFiles = files => {

    fileReader.readAsText(files[0]);
  }

  return (
    <div>
      <ReactFileReader handleFiles={handleFiles} fileTypes={'.json'}>
        <Button style={styles.button} variant="contained">
          Load State
        </Button>
      </ReactFileReader>
    </div>
  );
};

export default LoadStateButton;