import React, { Component } from "react";
import { browserHistory } from "react-router";
import { Typography, Button } from "@material-ui/core";
import {} from "mdi-material-ui";
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

class ProductCategoriesScreen extends Component {
  render() {
    const { classes, params } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Category List
        </Typography>

        <Components.CategoryList documentId={params.id} />
        <br />
        <Components.Footer />
      </div>
    );
  }
}
registerComponent({
  name: "ProductCategoriesScreen",
  component: ProductCategoriesScreen,
  hocs: [withCurrentUser, [withStyles, styles]]
});
