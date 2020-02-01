import React from "react";
import Button from "@material-ui/core/Button";
import ReactFileReader from 'react-file-reader';
import { useDispatch } from "react-redux";
import { addCar, addRider } from "../actions";
import Papa from 'papaparse';

const styles = {
  button: {
    backgroundColor: "green",
    color: "white",
    margin: 4
  },
}

const UploadButton = () => {

  const dispatch = useDispatch();

  const handleFiles = files => {
    Papa.parse(files[0], {
      complete: function(results) {
        console.log(results.data);
      }
    });

    // dispatch(deleteRider(riderId));
  }

  return (
    <div>
      {/* <input type='file' id='choose' /> */}
      <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
        <Button style={styles.button} variant="contained">
          Upload
        </Button>
      </ReactFileReader>
    </div>
  );
};

export default UploadButton;