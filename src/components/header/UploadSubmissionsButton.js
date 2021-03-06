import React from "react";
import Button from "@material-ui/core/Button";
import ReactFileReader from 'react-file-reader';
import { useDispatch } from "react-redux";
import { addCar, addRider, clear } from "../../actions";
import Papa from 'papaparse';
import { SOUTH, NORTH, OC } from "../../constants";

const styles = {
  button: {
    backgroundColor: "green",
    color: "white",
    margin: 4
  },
}

const UploadSubmissionsButton = () => {

  const dispatch = useDispatch();

  const handleFiles = files => {
    Papa.parse(files[0], {
      complete: function(results) {

        dispatch(clear());

        const [first, ...rest] = results.data;
        rest.map(entry => {
          const [timestamp, name, firstTime, hc, rawLocation, time, driver, additionalInfo, afterChurchPlans] = entry;
          const locationMap = {
            "S": SOUTH,
            "N": NORTH,
            "O": OC
          }
          const location = locationMap[rawLocation.charAt(0)];
          if (driver === "Yes") {
            dispatch(addCar(name, afterChurchPlans, additionalInfo));
          } else {
            dispatch(addRider(name, afterChurchPlans, location, additionalInfo));
          }
        });
      }
    });
  }

  return (
    <div>
      <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
        <Button style={styles.button} variant="contained">
          Upload Submissions
        </Button>
      </ReactFileReader>
    </div>
  );
};

export default UploadSubmissionsButton;