import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { GeneralProps } from "../services/payment.service";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      height: "150px",
      width: "150px",
      marginBottom: "2rem"
    },
    container: {
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      animation: "$fadeIn 1.5s forwards",
    },
    "@keyframes fadeIn": {
      "100%": {
        opacity: 1,
      },
    },
  })
);

function WelcomeTab(props: GeneralProps) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <img className={classes.image} src={logo} alt="Our Logo" />
      <Typography>Payment Made Simple</Typography>
    </Container>
  );
}

export default WelcomeTab;
