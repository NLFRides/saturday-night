import React from "react";
import Rider from "./Rider"

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 150,
    padding: 4,
    margin: 8
  }
}

const Car = ({ title }) => {
  return (
    <div style={ styles.container }>
      <h2>{title}</h2>
      <Rider></Rider>
      <Rider></Rider>
    </div>
  );
}

export default Car;