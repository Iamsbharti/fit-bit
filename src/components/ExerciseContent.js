import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { getExercises } from "../redux/actions/exercisesAction";
function ExerciseContent({ exercises, getExercises }) {
  const styles = {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 380,
    overflowY: "auto",
  };
  //dispatch action upon component load
  if (exercises !== undefined) {
    getExercises();
  }
  console.log(exercises);
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
      <ToastContainer autoClose={2000} hideProgressBar />
    </Fragment>
  );
}
const mapStateToProps = (state, ownProps) => ({
  exercises: state.exercises.reduce((exercises, exercise) => {
    let { muscles } = exercise;
    exercises = [muscles] ? { ...exercise } : "";
    console.log(exercises);
    return "";
  }, {}),
});
const mapActionsToProps = {
  getExercises,
};
export default connect(mapStateToProps, mapActionsToProps)(ExerciseContent);
