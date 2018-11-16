import React from "react";
import { replaceComponent } from "meteor/vulcan:core";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: "#00695c"
  },
  linearColorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  linearBarColorPrimary: {
    backgroundColor: "#00695c"
  }
});

function CustomLoading(props) {
  const { classes } = props;

  return (
    <div>
      <LinearProgress
      // classes={{
      //   colorPrimary: classes.linearColorPrimary,
      //   barColorPrimary: classes.linearBarColorPrimary
      // }}
      />
      {/* <CircularProgress className={classes.progress} /> */}
    </div>
  );
}

replaceComponent("Loading", CustomLoading, [withStyles, styles]);
