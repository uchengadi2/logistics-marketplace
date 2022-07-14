import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { TextField, Typography } from "@material-ui/core";
import background from "./../../logistic_assets/cover_image_1.png";
import history from "./../../history";

const useStyles = makeStyles((theme) => ({
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 10,
    height: 40,
    width: 140,
    marginLeft: 100,
    marginTop: 30,
    marginBottom: 10,
    fontSize: "1.25rem",
    backgroundColor: theme.palette.common.blue,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
  sendButtonMobile: {
    ...theme.typography.estimate,
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 100,
    marginTop: 30,
    marginBottom: 10,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.blue,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 100,
    },
  },
  root: {
    maxWidth: 600,
  },
  rootMobile: {
    maxWidth: 300,
    marginTop: 80,
    padding: 20,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "10em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
}));

const renderTextField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      //placeholder={label}
      // label={label}
      defaultValue={input.value}
      id={input.name}
      fullWidth
      type={type}
      //{...input}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderPasswordField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      //placeholder={label}
      // label={label}
      defaultValue={input.value}
      id={input.name}
      fullWidth
      type={type}
      style={{ marginTop: "1em" }}
      //{...input}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const SignUpForm = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");
  const [islogged, setIsLogged] = useState(false);

  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginDialogOpenStatus = () => {
    props.handleLoginDialogOpenStatus();
  };

  const handleMakeOpenSignUpDialogStatus = () => {
    props.handleMakeOpenSignUpDialogStatus();
  };

  const handleMakeCloseSignUpDialogStatus = () => {
    props.handleMakeCloseSignUpDialogStatus();
  };

  const handleMakeOpenLoginFormDialogStatus = () => {
    props.handleMakeOpenLoginFormDialogStatus();
  };

  const onSubmit = (formValues) => {
    setLoading(false);
    props.onSubmit(formValues);
    setLoading(true);
  };

  const buttonContent = () => {
    return <React.Fragment>Sign Up</React.Fragment>;
  };
  return (
    <>
      {matchesMD ? (
        <Box className={classes.root}>
          <Grid item container justifyContent="center">
            <FormLabel
              style={{ color: "blue", fontSize: "1.5em" }}
              component="legend"
            >
              Sign Up Form
            </FormLabel>
          </Grid>
          <Box
            component="form"
            id="loginForm"
            // onSubmit={onSubmit}
            sx={{
              width: 350,
              height: 480,
            }}
            noValidate
            autoComplete="off"
            // style={{ marginTop: 20 }}
          >
            {/* <Grid container direction="row" className={classes.background}>
          <Box
            sx={{
              width: 350,
              height: 180,
            }}
            noValidate
            autoComplete="off"
          ></Box>
        </Grid> */}

            <Field
              label="Name"
              id="name"
              name="name"
              type="text"
              component={renderTextField}
              style={{ marginTop: 10 }}
            />
            <Field
              label="Email"
              id="email"
              name="email"
              type="text"
              component={renderTextField}
              style={{ marginTop: 10 }}
            />

            <Field
              label="Password"
              id="password"
              name="password"
              type="password"
              component={renderPasswordField}
            />
            <Field
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              component={renderPasswordField}
            />

            <Button
              variant="contained"
              className={classes.sendButton}
              onClick={props.handleSubmit(onSubmit)}
            >
              {/* Sign Up */}
              {loading ? (
                <CircularProgress size={30} color="inherit" />
              ) : (
                buttonContent()
              )}
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="center"
              style={{ marginTop: 20 }}
            >
              <Grid item container alignItems="center">
                <Button
                  variant="text"
                  onClick={() => [
                    handleMakeOpenLoginFormDialogStatus(),
                    history.push("/"),
                  ]}
                  style={{ marginLeft: 30 }}
                >
                  Already a customer? Click to Login
                </Button>
              </Grid>
              {/* <Grid
            item
            container
            style={{ width: "25%", marginLeft: 10, fontSize: 10 }}
          >
            <Button
              variant="text"
              onClick={() => [
                handleMakeOpenSignUpDialogStatus(),
                history.push("/"),
              ]}
            >
              Sign Up
            </Button>
          </Grid> */}
            </Grid>
            {/* {renderSignUpForm()} */}
          </Box>
          {/* </form> */}
        </Box>
      ) : (
        <Box className={classes.rootMobile}>
          <Grid item container justifyContent="center">
            <FormLabel
              style={{ color: "blue", fontSize: "1.15em" }}
              component="legend"
            >
              Sign Up Form
            </FormLabel>
          </Grid>
          <Box
            component="form"
            id="loginForm"
            // onSubmit={onSubmit}
            sx={{
              width: 300,
              //height: 480,
            }}
            noValidate
            autoComplete="off"
            // style={{ marginTop: 20 }}
          >
            {/* <Grid container direction="row" className={classes.background}>
          <Box
            sx={{
              width: 350,
              height: 180,
            }}
            noValidate
            autoComplete="off"
          ></Box>
        </Grid> */}

            <Field
              label="Name"
              id="name"
              name="name"
              type="text"
              component={renderTextField}
              style={{ marginTop: 10 }}
            />
            <Field
              label="Email"
              id="email"
              name="email"
              type="text"
              component={renderTextField}
              style={{ marginTop: 10 }}
            />

            <Field
              label="Password"
              id="password"
              name="password"
              type="password"
              component={renderPasswordField}
            />
            <Field
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              component={renderPasswordField}
            />

            <Button
              variant="contained"
              className={classes.sendButtonMobile}
              onClick={props.handleSubmit(onSubmit)}
            >
              {/* Sign Up */}
              {loading ? (
                <CircularProgress size={30} color="inherit" />
              ) : (
                buttonContent()
              )}
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="center"
              style={{ marginTop: 20 }}
            >
              <Grid item container alignItems="center">
                <Button
                  variant="text"
                  onClick={() => [
                    handleMakeOpenLoginFormDialogStatus(),
                    history.push("/"),
                  ]}
                  style={{ marginLeft: 30 }}
                >
                  <span style={{ fontSize: 10 }}>
                    Already a customer? Click to Login
                  </span>
                </Button>
              </Grid>
              <Grid item container alignItems="center" justifyContent="center">
                <Button
                  variant="text"
                  onClick={() => [
                    props.handleMakeCloseSignUpDialogStatus(),
                    history.push("/"),
                  ]}
                  style={{ marginLeft: 30 }}
                >
                  <span style={{ fontSize: 10, marginRight: 50 }}>Cancel</span>
                </Button>
              </Grid>
              {/* <Grid
            item
            container
            style={{ width: "25%", marginLeft: 10, fontSize: 10 }}
          >
            <Button
              variant="text"
              onClick={() => [
                handleMakeOpenSignUpDialogStatus(),
                history.push("/"),
              ]}
            >
              Sign Up
            </Button>
          </Grid> */}
            </Grid>
            {/* {renderSignUpForm()} */}
          </Box>
          {/* </form> */}
        </Box>
      )}
    </>
  );
};

const validate = (formValues) => {
  const errors = {};
  let valid;

  if (!formValues.email) {
    errors.email = "Invalid email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)
  ) {
    errors.email = "Invalid email";
  }

  if (!formValues.password) {
    errors.password = "Please enter your password";
  }

  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate: validate,
})(SignUpForm);
