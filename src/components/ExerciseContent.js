import React, { Fragment, useEffect } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  capitalize,
} from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { getExercises } from "../redux/actions/exercisesAction";
function ExerciseContent({ exercises, getExercises, muscles }) {
  const styles = {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 380,
    overflowY: "auto",
  };
  //dispatch action upon component load

  useEffect(() => {
    if (exercises.length === 0) {
      getExercises();
    }
  }, [getExercises, exercises.length]);
  console.log(exercises);
  const typoStyles = {
    textTransaform: capitalize,
  };
  return (
    <Fragment>
      <Grid container spacing={2} style={{ marginTop: 3 }}>
        <Grid item sm>
          <Paper style={styles}>
            {exercises.map(([group, exercise]) => (
              <Typography style={typoStyles}>
                {group !== undefined ? group : ""}
              </Typography>
            ))}
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles}>Right</Paper>
        </Grid>
      </Grid>
      <ToastContainer autoClose={2000} hideProgressBar />
    </Fragment>
  );
}
const getExercisesByMuscles = (muscles, exercisesList) => {
  const initExercises = muscles.reduce(
    (exercises, category) => ({
      ...exercises,
      [category.name]: [],
    }),
    {}
  );
  return Object.entries(
    exercisesList.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      // console.log(muscles);
      exercises[muscles] = [...exercises[muscles], exercise];
      return exercises;
    }, initExercises)
  );
};
function mapStateToProps({ muscles, exercises }) {
  return {
    exercises:
      exercises.length !== 0 ? getExercisesByMuscles(muscles, exercises) : [],
    muscles,
  };
}
const mapActionsToProps = {
  getExercises,
};
export default connect(mapStateToProps, mapActionsToProps)(ExerciseContent);
