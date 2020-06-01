import {
  GET_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE,
} from "../actions/actionTypes";
import { exercises } from "../defaultStore";
export default function (_exercises = exercises, action) {
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises;
    default:
      return exercises;
  }
}
