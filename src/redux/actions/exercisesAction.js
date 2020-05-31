import { GET_EXERCISES } from "./actionTypes";
import { exercisesApi } from "../../api/exercisesApi";

export function getExercises() {
  console.log("exer-action");
  return async (dispatch) => {
    let exercises = await exercisesApi();
    dispatch({ type: GET_EXERCISES, exercises });
  };
}
