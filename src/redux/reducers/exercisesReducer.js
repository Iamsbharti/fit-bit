import { GET_EXERCISES } from "../actions/actionTypes";
export default function (_exercises = [], action) {
  //console.log("reducers");
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises;

    default:
      return _exercises;
  }
}
