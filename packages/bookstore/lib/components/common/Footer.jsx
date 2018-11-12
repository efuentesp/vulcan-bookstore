import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { ChevronLeftIcon } from "mdi-material-ui";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  getSetting,
  Components,
  registerComponent,
  withCurrentUser
} from "meteor/vulcan:core";
import classNames from "classnames";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const Footer = (props, context) => {
  const { classes, currentUser, router } = props;

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Powered by Softtek
      </Typography>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

Footer.displayName = "Footer";

registerComponent({
  name: "Footer",
  component: Footer,
  hocs: [withCurrentUser, withRouter, [withStyles, styles]]
});
