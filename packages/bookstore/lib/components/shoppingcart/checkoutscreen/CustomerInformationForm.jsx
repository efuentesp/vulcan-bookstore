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
import {
  Phone,
  At,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Undo,
  Check
} from "mdi-material-ui";
import { Formik, Form } from "formik";
import Yup from "yup";
import withStyles from "@material-ui/core/styles/withStyles";

import Customers from "../../../modules/customer/collection";

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
  button: {
    margin: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 17
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class CustomerInformationForm extends Component {
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
      fullname: "",
      emailaddress: "",
      phonenumber: "",
      address1: "",
      address2: "",
      postalcode: "",
      city: "",
      state: "",
      country: "",
      cardname: "",
      cardnumber: "",
      expirationdate: "",
      cvv: ""
    };

    const validationSchema = Yup.object().shape({
      fullname: Yup.string()
        .trim()
        .max(64)
        .required(),
      emailaddress: Yup.string()
        .trim()
        .email()
        .max(64)
        .required(),
      phonenumber: Yup.string()
        .trim()
        .max(64)
        .required(),
      address1: Yup.string()
        .trim()
        .max(64)
        .required(),
      address2: Yup.string()
        .trim()
        .max(64),
      postalcode: Yup.string()
        .trim()
        .max(64)
        .required(),
      city: Yup.string()
        .trim()
        .max(64)
        .required(),
      state: Yup.string()
        .trim()
        .max(64)
        .required(),
      country: Yup.string()
        .trim()
        .max(64)
        .required(),
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
              <Typography variant="h6" gutterBottom>
                Customer Information
              </Typography>
              <Divider />
              <TextField
                id="fullname"
                name="fullname"
                label="FullName"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
                error={errors.fullname && touched.fullname && true}
                helperText={errors.fullname}
              />
              <TextField
                id="emailaddress"
                name="emailaddress"
                label="EmailAddress"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailaddress}
                error={errors.emailaddress && touched.emailaddress && true}
                helperText={errors.emailaddress}
              />
              {/*
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="emailaddress">EmailAddress</InputLabel>
                <Input
                  id="emailaddress"
                  name="emailaddress"
                  type="number"
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <At className={classes.iconSmall} />
                    </InputAdornment>
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailaddress}
                  error={
                    errors.emailaddress && touched.emailaddress && true
                  }
                  helperText={errors.emailaddress}
                />
              </FormControl>
              */}
              <TextField
                id="phonenumber"
                name="phonenumber"
                label="PhoneNumber"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phonenumber}
                error={errors.phonenumber && touched.phonenumber && true}
                helperText={errors.phonenumber}
              />
              <TextField
                id="address1"
                name="address1"
                label="Address1"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address1}
                error={errors.address1 && touched.address1 && true}
                helperText={errors.address1}
              />
              <TextField
                id="address2"
                name="address2"
                label="Address2"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address2}
                error={errors.address2 && touched.address2 && true}
                helperText={errors.address2}
              />
              <TextField
                id="postalcode"
                name="postalcode"
                label="PostalCode"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalcode}
                error={errors.postalcode && touched.postalcode && true}
                helperText={errors.postalcode}
              />
              <TextField
                id="city"
                name="city"
                label="City"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                error={errors.city && touched.city && true}
                helperText={errors.city}
              />
              <TextField
                id="state"
                name="state"
                label="State"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
                error={errors.state && touched.state && true}
                helperText={errors.state}
              />
              <TextField
                id="country"
                name="country"
                label="Country"
                className={classes.textField}
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                error={errors.country && touched.country && true}
                helperText={errors.country}
              />
              <br />
              <br />
              <Typography variant="h6" gutterBottom>
                Payment Information
              </Typography>
              <Divider />
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
              {/*
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
              */}

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
                  shrink: true
                }}
                error={errors.expirationdate && touched.expirationdate && true}
                helperText={errors.expirationdate}
              />
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
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                disabled={isSubmitting}
              >
                <Check className={classes.extendedIcon} />
                Pay
              </Button>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                <Undo className={classes.extendedIcon} />
                Reset
              </Button>
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
  name: "CustomerInformationForm",
  component: CustomerInformationForm,
  hocs: [
    withCurrentUser,
    [withStyles, styles, { withTheme: true }],
    //[withCreate, withCreateOptions],
    withRouter
  ]
});
