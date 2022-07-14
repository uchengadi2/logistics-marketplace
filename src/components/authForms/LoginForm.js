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
import SignUpForm from "./SignUpForm";
import { style } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 120,
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
      width: 100,
    },
  },
  sendButtonMobile: {
    ...theme.typography.estimate,
    borderRadius: 10,
    height: 40,
    width: 80,
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
      width: 80,
    },
  },
  root: {
    maxWidth: 600,
  },
  rootMobile: {
    maxWidth: 280,
    marginTop: 150,
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
      helperText="Email"
      variant="outlined"
      //placeholder={label}
      defaultValue={input.value}
      label={label}
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
      helperText="Password"
      variant="outlined"
      //placeholder={label}
      defaultValue={input.value}
      label={label}
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

const LoginForm = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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

  const handleMakeOpenForgotPasswordFormDialogStatus = () => {
    props.handleMakeOpenForgotPasswordFormDialogStatus();
  };

  const buttonContent = () => {
    return <React.Fragment>Login</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(false);
    console.log("login form values:", formValues);
    props.onSubmit(formValues);
    setLoading(true);
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
              {/* New Route Details */}
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
            <Grid container direction="row" className={classes.background}>
              <Box
                sx={{
                  width: 350,
                  height: 180,
                }}
                noValidate
                autoComplete="off"
              ></Box>
            </Grid>

            <Field
              label=""
              id="email"
              name="email"
              type="text"
              component={renderTextField}
              style={{ marginTop: 10 }}
            />

            <Field
              label=""
              id="password"
              name="password"
              type="password"
              component={renderPasswordField}
            />

            <Button
              variant="contained"
              className={classes.sendButton}
              onClick={props.handleSubmit(onSubmit)}
            >
              {/* Login */}
              {loading ? (
                <CircularProgress size={30} color="inherit" />
              ) : (
                buttonContent()
              )}
            </Button>
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid
                item
                container
                alignItems="flex-start"
                style={{ width: "65%" }}
              >
                <Button
                  variant="text"
                  onClick={() => [
                    handleMakeOpenForgotPasswordFormDialogStatus(),
                    history.push("/"),
                  ]}
                >
                  Forget your password?
                </Button>
              </Grid>
              <Grid
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
              </Grid>
            </Grid>

            {/* {renderSignUpForm()} */}
          </Box>
          {/* </form> */}
        </Box>
      ) : (
        <>
          <Box className={classes.rootMobile}>
            <Grid item container justifyContent="center">
              <FormLabel
                style={{ color: "blue", fontSize: "1.5em" }}
                component="legend"
              >
                {/* New Route Details */}
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
                label=""
                id="email"
                name="email"
                type="text"
                component={renderTextField}
                style={{ marginTop: 10 }}
              />

              <Field
                label=""
                id="password"
                name="password"
                type="password"
                component={renderPasswordField}
              />

              <Button
                variant="contained"
                className={classes.sendButtonMobile}
                onClick={props.handleSubmit(onSubmit)}
              >
                {/* Login */}
                {loading ? (
                  <CircularProgress size={30} color="inherit" />
                ) : (
                  buttonContent()
                )}
              </Button>
              <Grid container direction="row" style={{ marginTop: 20 }}>
                <Grid
                  item
                  container
                  alignItems="flex-start"
                  style={{ width: "63%" }}
                >
                  <Button
                    variant="text"
                    onClick={() => [
                      handleMakeOpenForgotPasswordFormDialogStatus(),
                      history.push("/"),
                    ]}
                  >
                    <span style={{ fontSize: 10 }}>Forget your password?</span>
                  </Button>
                </Grid>
                <Grid item container style={{ width: "30%", marginLeft: 5 }}>
                  <Button
                    variant="text"
                    onClick={() => [
                      handleMakeOpenSignUpDialogStatus(),
                      history.push("/"),
                    ]}
                  >
                    <span style={{ fontSize: 10 }}>Sign Up</span>
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Grid item>
                  <Button
                    variant="text"
                    onClick={() => [
                      props.handleLoginDialogCloseStatus(),
                      history.push("/"),
                    ]}
                    style={{ marginRight: 15 }}
                  >
                    <span style={{ fontSize: 10 }}>Cancel</span>
                  </Button>
                </Grid>
              </Grid>
              {/* {renderSignUpForm()} */}
            </Box>
            {/* </form> */}
          </Box>
        </>
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
})(LoginForm);
