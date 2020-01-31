import React from "react";
import Button from "@material-ui/core/Button";

const styles = {
  button: {
    backgroundColor: "green",
    color: "white",
    margin: 4
  },
}

const UploadButton = () => {

  const handleClick = () => {
    
  }

  return (
    <div>
      <Button style={styles.button} variant="contained" onClick={handleClick}>
        Upload
      </Button>
    </div>
  );
};

export default UploadButton;