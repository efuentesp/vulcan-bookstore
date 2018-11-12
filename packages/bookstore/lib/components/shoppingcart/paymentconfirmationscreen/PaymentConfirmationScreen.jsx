import React, { Component } from "react";
import { browserHistory } from "react-router";
import { Typography, Button } from "@material-ui/core";
import {
	KeyboardReturn
} from "mdi-material-ui";
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

class PaymentConfirmationScreen extends Component {
  render() {
    const { classes, params } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Payment Confirmation
        </Typography>
        
        
        <Button
          variant="contained" 
          className={classes.button}
          onClick={() => {
            browserHistory.push("/productlistscreen");
          }}
        >
          <KeyboardReturn className={classes.extendedIcon} />
          Continue Shopping
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
  name: "PaymentConfirmationScreen",
  component: PaymentConfirmationScreen,
  hocs: [withCurrentUser, [withStyles, styles]]
});
