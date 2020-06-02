import React, { useState, useEffect } from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { getMuscles } from "../redux/actions/musclesAction";

function Footer({ muscles, getMuscles }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getMuscles();
  }, [getMuscles]);

  return (
    <Paper>
      <Tabs value={value} onChange={handleChange} textColor="primary" centered>
        <Tab label="All"></Tab>
        {muscles.map((group, index) => (
          <Tab key={index} label={group.name}></Tab>
        ))}
      </Tabs>
    </Paper>
  );
}
const mapStateToProps = (state) => ({
  muscles: state.muscles,
});
const mapActionToProps = {
  getMuscles,
};

export default connect(mapStateToProps, mapActionToProps)(Footer);
