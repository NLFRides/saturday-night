import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core';

const styles = {
  tooltip: {
      fontSize:25,
  }
};

export const MyToolTip = withStyles(styles)(Tooltip);