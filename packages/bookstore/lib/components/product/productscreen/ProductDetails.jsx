import React from "react";
import { withRouter } from "react-router";
import NumberFormat from "react-number-format";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { Cart } from "mdi-material-ui";
import { registerComponent, Components, withSingle } from "meteor/vulcan:core";
import withStyles from "@material-ui/core/styles/withStyles";

import Products from "../../../modules/product/collection";

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

function ProductDetails(props) {
  return (
    <div style={{ margin: "20px auto" }}>
      <Components.ProductDetailsInner documentId={props.documentId} />
    </div>
  );
}

registerComponent({ name: "ProductDetails", component: ProductDetails });

function ProductDetailsInner(props) {
  const { classes, router, loading } = props;
  if (loading) {
    return <Components.Loading />;
  } else {
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Grid container>
            <Grid item md={2}>
              <img src={props.document.picture} />
              <br />
            </Grid>
            <Grid item md={8}>
              <Components.StaticText label="Name" value={props.document.name} />

              <Typography variant="caption" color="textSecondary" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" gutterBottom>
                {props.document.description}
              </Typography>
              <br />
              <Typography variant="caption" color="textSecondary" gutterBottom>
                Price
              </Typography>
              <Typography variant="body1" gutterBottom>
                <NumberFormat
                  value={props.document.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </Typography>
              <br />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={2} />
          </Grid>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              router.push("/shoppingcartscreen");
            }}
          >
            <Cart className={classes.extendedIcon} />
            Add to Cart
          </Button>
        </Paper>
      </div>
    );
  }
}

const singleOptions = {
  collection: Products,
  fragmentName: "ProductItemFragment"
};

registerComponent({
  name: "ProductDetailsInner",
  component: ProductDetailsInner,
  hocs: [[withSingle, singleOptions], withRouter, [withStyles, styles]]
});
