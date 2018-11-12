import React from "react";
import NumberFormat from "react-number-format";
import { browserHistory } from "react-router";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@material-ui/core";
import {} from "mdi-material-ui";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  registerComponent,
  Loading,
  withMulti,
  withCurrentUser
} from "meteor/vulcan:core";

import ProductOnCarts from "../../../modules/productoncart/collection";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  footer: {
    backgroundColor: theme.palette.background.paper
    //padding: theme.spacing.unit * 6
  }
});

const ShoppingCartProductList = ({
  results = [],
  currentUser,
  loading,
  loadMore,
  count,
  totalCount,
  refetch,
  classes
}) => (
  <div>
    {loading ? (
      <Loading />
    ) : (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell numeric>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(row => {
              return (
                <TableRow key={row._id}>
                  <TableCell>{row.productId}</TableCell>
                  <TableCell numeric>
                    <NumberFormat
                      value={row.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell numeric>
                    <NumberFormat
                      value={row.quantity}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell numeric>
                    <NumberFormat
                      value={row.total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )}
  </div>
);

const options = {
  collection: ProductOnCarts,
  fragmentName: "ProductOnCartItemFragment",
  limit: 12
};

registerComponent({
  name: "ShoppingCartProductList",
  component: ShoppingCartProductList,
  hocs: [withCurrentUser, [withMulti, options], [withStyles, styles]]
});
