import {
  Backdrop,
  Button,
  CircularProgress,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import {
  GeneralProps,
  mockedCreation,
  triggerPayment,
} from "../services/payment.service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      margin: "2rem",
    },
    input: {
      marginTop: "1rem",
      width: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    button: {
      width: "60%",
      alignSelf: "center",
    },
  })
);

function PaymentTab(props: GeneralProps) {
  const { changeStep, toggleLoading } = props;
  const classes = useStyles();

  const createRequest = () => {
    toggleLoading();
    setTimeout(() => {
      triggerPayment(mockedCreation)
        .then((response: AxiosResponse) => changeStep(2))
        .finally(() => toggleLoading());
    }, 500);
  };

  return (
    <section className={classes.container}>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="IBAN"
          disabled
          variant="outlined"
          defaultValue={mockedCreation.ibanPayer}
        />
        <TextField
          className={classes.input}
          label="Amout"
          disabled
          variant="outlined"
          defaultValue={mockedCreation.amount}
        />
        <TextField
          className={classes.input}
          disabled
          variant="outlined"
          placeholder="Purpose"
          multiline
          rowsMax={4}
          defaultValue={mockedCreation.purposeCode}
        />
      </form>
      <Button
        onClick={createRequest}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Click here to Pay
      </Button>
    </section>
  );
}

export default PaymentTab;
