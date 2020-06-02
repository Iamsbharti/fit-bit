import React, { Fragment, useEffect, useState } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { getExercises } from "../redux/actions/exercisesAction";
function ExerciseContent({
  exercises,
  getExercises,
  muscles,
  category,
  rawExercisesObj,
}) {
  const styles = {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 380,
    overflowY: "auto",
    fontFamily: "Roboto",
  };
  //Right pane content for 'All' condition
  const rightPane = {
    title: "Descriptions",
    description: "Select any exercise on left pane",
  };
  //dispatch action upon component load
  useEffect(() => {
    if (exercises.length === 0) {
      getExercises();
    }
  }, [getExercises, exercises.length]);
  //console.log(category);
  //selected exercise
  const [exercise, setExercise] = useState({});
  const handleItemClick = (id) => {
    let selectedExercise = rawExercisesObj.find((exe) => exe.id === id);
    //console.log(selectedExercise);
    setExercise(selectedExercise);
  };
  useEffect(() => {
    setExercise("");
  }, [category]);
  //console.log(exercise);
  return (
    <Fragment>
      <Grid container spacing={2} style={{ marginTop: 3 }}>
        <Grid item sm>
          <Paper style={styles}>
            {exercises.map(([group, exercise]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul" key={group}>
                    {exercise.map(({ title, id }) => (
                      <ListItem key={id}>
                        <ListItemText
                          primary={title}
                          onClick={() => handleItemClick(id)}
                        />
                        <IconButton>
                          <Edit />
                        </IconButton>
                        <ListItemSecondaryAction>
                          <IconButton edge="end">
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
            )}
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles}>
            {exercise.title ? (
              <Fragment>
                <Typography variant="h4">{exercise.title}</Typography>
                <br />
                <Typography variant="h5">{exercise.description}</Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Typography variant="h4">{rightPane.title}</Typography>
                <br />
                <Typography variant="h5">{rightPane.description}</Typography>
              </Fragment>
            )}
          </Paper>
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
      exercises[muscles] = [...exercises[muscles], exercise];
      return exercises;
    }, initExercises)
  );
};
function mapStateToProps({ muscles, exercises, category }) {
  return {
    exercises:
      exercises.length !== 0
        ? getExercisesByMuscles(muscles, exercises)
        : exercises,
    muscles,
    category,
    rawExercisesObj: exercises,
  };
}
const mapActionsToProps = {
  getExercises,
};
export default connect(mapStateToProps, mapActionsToProps)(ExerciseContent);
