import React from "react";
import { replaceComponent } from "meteor/vulcan:core";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

function CustomFormControl(props) {
  const {
    classes,
    id,
    type,
    label,
    value,
    hint,
    ref,
    onChange,
    placeholder,
    defaultValue,
    autoComplete,
    message,
    className
  } = props;

  console.log(props);

  return (
    <TextField
      id={id}
      name={id}
      type={type}
      label={label}
      placeholder={placeholder}
      className={classes.textField}
      margin="normal"
      fullWidth
      required
      onChange={onChange}
      //onBlur={handleBlur}
      value={value}
      error={message && true}
      helperText={message}
    />
  );
}

replaceComponent("FormControl", CustomFormControl, [withStyles, styles]);
