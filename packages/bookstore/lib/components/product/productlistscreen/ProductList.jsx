import React from "react";
import NumberFormat from "react-number-format";
import { withRouter } from "react-router";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@material-ui/core";
import { ArrowRightThick } from "mdi-material-ui";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  registerComponent,
  Loading,
  withMulti,
  withCurrentUser
} from "meteor/vulcan:core";

import Products from "../../../modules/product/collection";

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
  loadMore: {
    textAlign: "center"
  },
  footer: {
    backgroundColor: theme.palette.background.paper
    //padding: theme.spacing.unit * 6
  }
});

const ProductList = ({
  results = [],
  currentUser,
  loading,
  loadMore,
  count,
  totalCount,
  refetch,
  classes,
  router
}) => (
  <div>
    {loading ? (
      <Loading />
    ) : (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Picture</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map(row => {
                return (
                  <TableRow key={row._id}>
                    <TableCell>
                      <img src={row.picture} width="60px" height="60px" />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                          router.push("/productscreen/" + row._id);
                        }}
                      >
                        <ArrowRightThick className={classes.extendedIcon} />
                        See details
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        {/* load more */}

        {totalCount > results.length && (
          <div className={classes.loadMore}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={e => {
                e.preventDefault();
                loadMore();
              }}
            >
              Load More ({count}/{totalCount})
            </Button>
          </div>
        )}
      </div>
    )}
  </div>
);

const options = {
  collection: Products,
  fragmentName: "ProductItemFragment",
  limit: 12
};

registerComponent({
  name: "ProductList",
  component: ProductList,
  hocs: [
    withCurrentUser,
    withRouter,
    [withMulti, options],
    [withStyles, styles]
  ]
});
