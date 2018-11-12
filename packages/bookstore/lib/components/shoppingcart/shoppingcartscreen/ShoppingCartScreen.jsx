import React, { Component } from "react";
import { withRouter } from "react-router";
import { Typography, Button } from "@material-ui/core";
import { ArrowLeft, KeyboardReturn } from "mdi-material-ui";
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

class ShoppingCartScreen extends Component {
  render() {
    const { classes, params, router } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>

        <Components.ShoppingCartProductList documentId={params.id} />
        <br />
        <Components.ShoppingCartTotalDetails documentId={params.id} />
        <br />

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => {
            router.push("/productlistscreen");
          }}
        >
          <KeyboardReturn className={classes.extendedIcon} />
          Continue Shopping
        </Button>
        <Button
          color="primary"
          className={classes.button}
          onClick={() => {
            router.goBack();
          }}
        >
          <ArrowLeft className={classes.extendedIcon} />
          Return
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
  name: "ShoppingCartScreen",
  component: ShoppingCartScreen,
  hocs: [withCurrentUser, withRouter, [withStyles, styles]]
});
