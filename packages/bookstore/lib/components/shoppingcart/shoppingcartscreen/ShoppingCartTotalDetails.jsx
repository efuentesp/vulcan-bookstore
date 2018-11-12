import React from "react";
import { browserHistory } from "react-router";
import NumberFormat from "react-number-format";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { CurrencyUsd, Delete } from "mdi-material-ui";
import { registerComponent, Components, withSingle } from "meteor/vulcan:core";
import withStyles from "@material-ui/core/styles/withStyles";

import ShoppingCarts from "../../../modules/shoppingcart/collection";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
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

function ShoppingCartTotalDetails(props) {
  return (
    <div style={{ margin: "20px auto" }}>
      <Components.ShoppingCartTotalDetailsInner documentId={props.documentId} />
    </div>
  );
}

registerComponent({
  name: "ShoppingCartTotalDetails",
  component: ShoppingCartTotalDetails
});

function ShoppingCartTotalDetailsInner(props) {
  const { classes } = props;
  if (props.loading) {
    return <Components.Loading />;
  } else {
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="caption" color="textSecondary" gutterBottom>
            SubTotal
          </Typography>
          <Typography variant="body1" gutterBottom>
            <NumberFormat
              value={props.document.subtotal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Typography>
          <br />
          <Typography variant="caption" color="textSecondary" gutterBottom>
            TaxAmount
          </Typography>
          <Typography variant="body1" gutterBottom>
            <NumberFormat
              value={props.document.taxamount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Typography>
          <br />
          <Typography variant="caption" color="textSecondary" gutterBottom>
            DiscountAmount
          </Typography>
          <Typography variant="body1" gutterBottom>
            <NumberFormat
              value={props.document.discountamount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Typography>
          <br />
          <Typography variant="caption" color="textSecondary" gutterBottom>
            TotalAmount
          </Typography>
          <Typography variant="body1" gutterBottom>
            <NumberFormat
              value={props.document.totalamount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Typography>
          <br />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              browserHistory.push("/checkoutscreen");
            }}
          >
            <CurrencyUsd className={classes.extendedIcon} />
            Checkout
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={() => {
              browserHistory.push("/shoppingcartscreen");
            }}
          >
            <Delete className={classes.extendedIcon} />
            Empty the Cart
          </Button>
        </Paper>
      </div>
    );
  }
}

const singleOptions = {
  collection: ShoppingCarts,
  fragmentName: "ShoppingCartItemFragment"
};

registerComponent({
  name: "ShoppingCartTotalDetailsInner",
  component: ShoppingCartTotalDetailsInner,
  hocs: [[withSingle, singleOptions], [withStyles, styles]]
});
