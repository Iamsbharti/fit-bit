import React, { useState } from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";

export default function () {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper>
      <Tabs value={value} onChange={handleChange} textColor="primary" centered>
        <Tab label="One"></Tab>
        <Tab label="Two"></Tab>
        <Tab label="Three"></Tab>
      </Tabs>
    </Paper>
  );
}
