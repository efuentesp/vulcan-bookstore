import React from "react";
import PropTypes from "prop-types";
import { replaceComponent } from "meteor/vulcan:core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  // progress: {
  //   margin: theme.spacing.unit * 2,
  //   color: "#00695c"
  // },
});

function CustomModal({
  classes,
  children,
  size,
  show,
  onHide,
  title,
  showCloseButton,
  header,
  footer,
  ...rest
}) {
  // console.log(header, title, footer);
  let headerComponent = "";
  if (header) {
    headerComponent = (
      <DialogTitle id="form-dialog-title">{header}</DialogTitle>
    );
  } else if (title) {
    headerComponent = <DialogTitle id="form-dialog-title">{title}</DialogTitle>;
  }

  const footerComponent = footer ? (
    <DialogActions>{footer}</DialogActions>
  ) : null;

  return (
    <Dialog
      open={show}
      onClose={onHide}
      aria-labelledby="form-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {headerComponent}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onHide} color="primary">
          Close
        </Button>
      </DialogActions>
      {/* {footerComponent} */}
    </Dialog>
  );
}

CustomModal.propTypes = {
  size: PropTypes.string,
  show: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

CustomModal.defaultProps = {
  size: "large",
  show: false,
  showCloseButton: true
};

replaceComponent("Modal", CustomModal, [withStyles, styles]);
