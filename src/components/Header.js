import React from "react";

import AddButton from "./AddButton";

const styles = {
  header: {
    display: "flex",
    margin: 8,
    flexDirection: "row",
  },
}

const Header = () => {

  return (
    <div style={styles.header}>
      <AddButton type="car"></AddButton>
      <AddButton type="rider"></AddButton>
    </div>
  )
};

export default Header;