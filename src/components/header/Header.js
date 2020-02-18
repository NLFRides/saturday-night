import React from "react";

import AddButton from "./AddButton";
import UploadSubmissionsButton from "./UploadSubmissionsButton";
import SaveStateButton from "./SaveStateButton";
import LoadStateButton from "./LoadStateButton";

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
      <UploadSubmissionsButton/>
      <SaveStateButton/>
      <LoadStateButton/>
    </div>
  )

};

export default Header;