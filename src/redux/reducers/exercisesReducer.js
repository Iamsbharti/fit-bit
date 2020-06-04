import { GET_EXERCISES, ADD_EXERCISE } from "../actions/actionTypes";
import { exercises } from "../defaultStore";
export default function (_exercises = exercises, action) {
  console.log("reducers");
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises;
    case ADD_EXERCISE:
      return [..._exercises, action.exercise];
    default:
      return _exercises;
  }
}
