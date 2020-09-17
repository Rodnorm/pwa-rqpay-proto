import {
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { GeneralProps } from "../services/payment.service";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    iconSuccess: {
      color: "green",
      fontSize: "5rem",
    },
    fadeIn: {
      opacity: 0,
      animation: "$fadeIn 1.5s forwards",
    },
    "@keyframes fadeIn": {
      "100%": {
        opacity: 1,
      },
    },
  })
);

function FeedbackTab(props: GeneralProps) {
  const classes = useStyles();
  const [positiveFeedback, setPositiveFeedback] = useState(false);
  setTimeout(() => setPositiveFeedback(true), 1000);
  return (
    <Container className={classes.container}>
      {positiveFeedback ? (
        <div className={`${classes.container} ${classes.fadeIn}`}>
          <CheckCircleOutlineIcon className={classes.iconSuccess} />
          <Typography>All good!</Typography>
        </div>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Container>
  );
}

export default FeedbackTab;
