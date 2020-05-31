import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
export default function () {
  const styles = {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 380,
    overflowY: "auto",
  };
  return (
    <Fragment>
      <Grid container spacing={2} style={{ marginTop: 3 }}>
        <Grid item sm>
          <Paper style={styles}>Left</Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles}>Right</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
