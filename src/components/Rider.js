import React from "react";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  chip: {
    marginTop: 4,
    marginBottom: 4
  }
}

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Rider = ({ name }) => {
  return (
    <Tooltip title="South | 9:00AM | LIT">
      <Chip style={styles.chip} label={ name } onDelete={ handleDelete } color="primary" />
    </Tooltip>
  );
}

export default Rider;