import {
  GET_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
} from "../actions/actionTypes";
//import { exercises } from "../defaultStore";
export default function (_exercises = [], action) {
  //console.log("reducers", action.type, action.id);
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises;
    case ADD_EXERCISE:
      return [..._exercises, action.exercise];
    case DELETE_EXERCISE:
      return _exercises.filter((ex) => ex.id !== action.id);
    default:
      return _exercises;
  }
}
