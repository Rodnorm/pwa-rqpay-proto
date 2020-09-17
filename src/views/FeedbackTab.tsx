import { CircularProgress, Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { GeneralProps } from "../services/payment.service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center"
    }
  })
);

function FeedbackTab(props: GeneralProps) {
  const classes = useStyles()
  const {} = props;

  return (
    <Container className={classes.container}>
      <CircularProgress color="inherit" />
    </Container>
  );
}

export default FeedbackTab;