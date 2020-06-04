import { GET_EXERCISES, ADD_EXERCISE } from "./actionTypes";
import * as exercisesApi from "../../api/exercisesApi";

export function getExercises() {
  // console.log("exer-action");
  return async (dispatch) => {
    let exercises = await exercisesApi.fetchExercises();
    dispatch({ type: GET_EXERCISES, exercises });
  };
}

export function createExercise(newExercise) {
  console.log("create-action", newExercise);
  return async (dispatch) => {
    let exercise = await exercisesApi.createExcercise(newExercise);
    dispatch({ type: ADD_EXERCISE, exercise });
  };
}
