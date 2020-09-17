import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PaymentTab from "./views/PaymentTab";
import WelcomeTab from "./views/WelcomeTab";
import FeedbackTab from "./views/FeedbackTab";
import { Backdrop, CircularProgress, createStyles } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSteps = (step: number) => {
    setValue(step);
  };

  const toggleLoading = () => setLoading((loading) => !loading);

  return (
    <div className={classes.root}>
      <Backdrop open={loading} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Start" {...a11yProps(0)} />
          <Tab label="Payment" {...a11yProps(1)} />
          <Tab label="Feedback" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <WelcomeTab changeStep={handleSteps} toggleLoading={toggleLoading} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PaymentTab changeStep={handleSteps} toggleLoading={toggleLoading} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <FeedbackTab changeStep={handleSteps} toggleLoading={toggleLoading} />
      </TabPanel>
    </div>
  );
}
