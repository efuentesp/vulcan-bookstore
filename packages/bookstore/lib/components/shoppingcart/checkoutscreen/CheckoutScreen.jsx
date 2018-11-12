import React, { Component } from "react";
import { withRouter } from "react-router";
import { Typography, Button } from "@material-ui/core";
import { ArrowLeft } from "mdi-material-ui";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  registerComponent,
  Components,
  withCurrentUser
} from "meteor/vulcan:core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class CheckoutScreen extends Component {
  render() {
    const { classes, params, router } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>

        <Components.CustomerInformationForm documentId={params.id} />
        <br />

        <Button
          color="primary"
          className={classes.button}
          onClick={() => {
            router.goBack();
          }}
        >
          <ArrowLeft className={classes.extendedIcon} />
          Regresar
        </Button>

        {/* Footer */}
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
        {/* End footer */}
      </div>
    );
  }
}
registerComponent({
  name: "CheckoutScreen",
  component: CheckoutScreen,
  hocs: [withCurrentUser, withRouter, [withStyles, styles]]
});
