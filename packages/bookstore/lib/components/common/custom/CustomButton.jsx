import React from "react";
import { replaceComponent } from "meteor/vulcan:core";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function CustomButton(props) {
  const { classes, children, variant, size, iconButton, ...rest } = props;

  //console.log(variant, size, iconButton, rest);

  return (
    // <Button bsStyle={variant} bsSize={size} {...rest}>{children}</Button>
    <Button
      variant="contained"
      color={variant}
      className={classes.button}
      {...rest}
    >
      {children}
    </Button>
  );
}

replaceComponent("Button", CustomButton, [withStyles, styles]);
