import React, { Component } from "react";
import MomentUtils from "@date-io/moment";
import gql from "graphql-tag";
import { withRouter } from "react-router";
import { browserHistory } from "react-router";
import {
  Components,
  registerComponent,
  withCurrentUser,
  withCreate
} from "meteor/vulcan:core";
import {
  Paper,
  TextField,
  Typography,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import { Phone, At, ArrowLeft, ArrowRight, Calendar } from "mdi-material-ui";
import { Formik, Form } from "formik";
import Yup from "yup";
import withStyles from "@material-ui/core/styles/withStyles";

import CreditCards from "../../../modules/creditcard/collection";

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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
  },
  swappableView: {
    width: "98%"
  },
  iconSmall: {
    fontSize: 17
  }
});

class PaymentInformationForm extends Component {
  render() {
    const {
      currentUser,
      refetch,
      classes,
      theme,
      createCustomer,
      router
    } = this.props;

    const initialValues = {
      cardname: "",
      cardnumber: "",
      expirationdate: new Date(),
      cvv: ""
    };

    const validationSchema = Yup.object().shape({
      cardname: Yup.string()
        .trim()
        .max(64)
        .required(),
      cardnumber: Yup.string()
        .trim()
        .max(64)
        .required(),
      expirationdate: Yup.date().required(),
      cvv: Yup.string()
        .trim()
        .max(64)
        .required()
    });

    handleSubmit = (values, { setSubmitting }) => {
      //createCustomer({
      //  data: {
      //    typeId: "YYY",
      //    emailaddress: "email.mail.com",
      //    fullname: "Nombre",
      //    phonenumber: "Telefono",
      //    address1: "Direccion 1",
      //    address2: "Direccion 2",
      //    city: "Ciudad",
      //    state: "Estado",
      //    postalcode: "12345",
      //    country: "Pais"
      //  }
      //}).then(customer => {
      //  alert(JSON.stringify(customer, null, 2));
      //  router.push({
      //    pathname: `/paymentconfirmationscreen/${
      //      customer.data.createCustomer.data._id
      //    }`
      //  });
      //});
      setSubmitting(false);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    };

    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h6" gutterBottom>
          Payment Information
        </Typography>
        <Divider />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleReset
          }) => (
            <Form>
              <TextField
                id="cardname"
                name="cardname"
                label="CardName"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardname}
                error={errors.cardname && touched.cardname && true}
                helperText={errors.cardname}
              />
              <TextField
                id="cardnumber"
                name="cardnumber"
                label="CardNumber"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardnumber}
                error={errors.cardnumber && touched.cardnumber && true}
                helperText={errors.cardnumber}
              />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  id="expirationdate"
                  name="expirationdate"
                  label="ExpirationDate"
                  className={classes.textField}
                  margin="normal"
                  format="YYYY/MM/DD"
                  fullWidth
                  required
                  showTodayButton
                  leftArrowIcon={<ArrowLeft />}
                  rightArrowIcon={<ArrowRight />}
                  keyboard
                  keyboardIcon={<Calendar />}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.expirationdate}
                  error={
                    errors.expirationdate && touched.expirationdate && true
                  }
                  helperText={errors.expirationdate}
                />
              </MuiPickersUtilsProvider>
              {/*
              <TextField
                id="expirationdate"
                name="expirationdate"
                label="ExpirationDate"
                type="date"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expirationdate}
                InputLabelProps={{
                  shrink: true,
                }}
                error={errors.expirationdate && touched.expirationdate && true}
                helperText={errors.expirationdate}
              />
              */}
              <TextField
                id="cvv"
                name="cvv"
                label="CVV"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cvv}
                error={errors.cvv && touched.cvv && true}
                helperText={errors.cvv}
              />
              <br />
            </Form>
          )}
        />
      </Paper>
    );
  }
}

// const withCreateOptions = {
//   collection: Customers,
//   fragment: gql`
//     fragment CustomerItemFragment on Customer {
//       _id
//       createdAt
//       typeId
//       emailaddress
//       fullname
//       phonenumber
//       address1
//       address2
//       city
//       state
//       postalcode
//       country
//     }
//   `
// };

registerComponent({
  name: "PaymentInformationForm",
  component: PaymentInformationForm,
  hocs: [
    withCurrentUser,
    [withStyles, styles, { withTheme: true }],
    //[withCreate, withCreateOptions],
    withRouter
  ]
});
