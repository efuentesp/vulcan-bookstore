import React from "react";
import PropTypes from "prop-types";
import { Components, replaceComponent } from "meteor/vulcan:core";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function CustomAccountsButton(props) {
  const {
    classes,
    label,
    // href = null,
    type,
    disabled = false,
    className,
    onClick
  } = props;

  //console.log(label, type, disabled, className);

  return type === "link" ? (
    // <a
    //   href="#"
    //   className={className}
    //   onClick={onClick}
    //   style={{ marginRight: "10px" }}
    // >
    //   {label}
    // </a>
    <Button color="primary" className={classes.button} onClick={onClick}>
      {label}
    </Button>
  ) : (
    <Components.Button
      style={{ marginRight: "10px" }}
      variant="primary"
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Components.Button>
  );
}

CustomAccountsButton.propTypes = {
  onClick: PropTypes.func
};

replaceComponent("AccountsButton", CustomAccountsButton, [withStyles, styles]);
