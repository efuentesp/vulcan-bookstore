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
import { Check } from "mdi-material-ui";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  registerComponent,
  Loading,
  withMulti,
  withCurrentUser
} from "meteor/vulcan:core";

import Categories from "../../../modules/category/collection";

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

const CategoryList = ({
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
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                          router.push("/productlistscreen/" + row._id);
                        }}
                      >
                        <Check className={classes.extendedIcon} />
                        Show
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
  collection: Categories,
  fragmentName: "CategoryItemFragment",
  limit: 12
};

registerComponent({
  name: "CategoryList",
  component: CategoryList,
  hocs: [
    withCurrentUser,
    withRouter,
    [withMulti, options],
    [withStyles, styles]
  ]
});
