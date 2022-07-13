import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import boxtruck from "./../logistic_assets/box_truck.png";
import carcarriertrailer from "./../logistic_assets/Car_Carrier_Trailer.png";
import cementtruck from "./../logistic_assets/Cement_Truck.png";
import chillertruck from "./../logistic_assets/Chiller_Trucks.png";
import flatbedtrailer from "./../logistic_assets/Flat_bed_Trailer.png";
import livestocktruck from "./../logistic_assets/Livestock_Trucks.png";
import loggingtruck from "./../logistic_assets/Logging_Trucks.png";
import tanker from "./../logistic_assets/Tankers.png";
import tippertruck from "./../logistic_assets/Tipper_Trucks.png";
import towtruck from "./../logistic_assets/Tow_Truck.png";
import cranetruck from "./../logistic_assets/crane truck2.png";
import ButtonArrow from "./ui/ButtonArrow";
import Bookings from "./Bookings";
import { baseURL } from "./../apis/util";

import theme from "./ui/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    //height: 440,
    height: 650,

    marginLeft: "10px",
    borderRadius: 30,
    marginTop: "10em",
    padding: 0,
    // "&:hover": {
    //   border: "solid",
    //   borderColor: theme.palette.common.grey,
    // },
  },
  media: {
    height: 200,
    width: 500,
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "55px",
    marginLeft: "160px",
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  dialog: {
    //maxWidth: 325,
    maxWidth: 500,
    //height: 450,
    marginLeft: "10px",
    borderRadius: 30,
    //marginTop: "10em",
    padding: 0,
    marginTop: -20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "250px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMDUp = useMediaQuery(theme.breakpoints.up("md"));

  //const imageUrl = `${baseURL}/images/categories/${props.image}`;
  const imageUrl = `${baseURL}/images/categories/${props.image}`;

  const Str = require("@supercharge/strings");

  console.log(
    "this is description trim:",
    Str(props.description).limit(100, "...").get()
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleBookingsOpenDialogStatus = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={props.title}
          image={imageUrl}
          title={props.title}
          crossOrigin="anonymous"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          //   component={Link}
          //   to="/mobileapps"
          //   varaint="outlined"
          className={classes.learnButton}
          onClick={() => setOpen(true)}
          //   onClick={() => {
          //     props.setValue(1);
          //     props.setSelectedIndex(2);
          //   }}
        >
          <span style={{ marginRight: 10 }}>Book Vehicle </span>
          <ButtonArrow
            height={10}
            width={10}
            fill={theme.palette.common.blue}
          />
        </Button>
      </CardActions>
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            marginTop: 110,
            height: 540,
            paddingBottom: "3em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "2em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "2em",
          },
        }}
      >
        <DialogContent>
          {matchesMDUp ? (
            <Card className={classes.dialog}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt={props.alt}
                  image={imageUrl}
                  crossOrigin="anonymous"
                />
              </CardActionArea>
            </Card>
          ) : (
            <></>
          )}

          <Bookings
            token={props.token}
            userId={props.userId}
            handleBookingsOpenDialogStatus={handleBookingsOpenDialogStatus}
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
}
