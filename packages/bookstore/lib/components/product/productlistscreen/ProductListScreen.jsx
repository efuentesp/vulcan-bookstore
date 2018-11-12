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

class ProductListScreen extends Component {
  render() {
    const { classes, params, router } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Product List
        </Typography>

        <Components.ProductList documentId={params.id} />
        <br />

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

        <br />
        <Components.Footer />
      </div>
    );
  }
}
registerComponent({
  name: "ProductListScreen",
  component: ProductListScreen,
  hocs: [withCurrentUser, withRouter, [withStyles, styles]]
});
