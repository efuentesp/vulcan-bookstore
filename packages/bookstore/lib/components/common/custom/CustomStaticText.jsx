import React from "react";
import { replaceComponent } from "meteor/vulcan:core";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  // button: {
  //   margin: theme.spacing.unit
  // }
});

function CustomStaticText(props) {
  const { classes, value, label } = props;

  return (
    <div>
      <Typography variant="caption" color="textSecondary" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {value}
      </Typography>
      <br />
    </div>
  );
}

replaceComponent("StaticText", CustomStaticText, [withStyles, styles]);
