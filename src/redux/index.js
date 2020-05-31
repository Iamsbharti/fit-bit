import exercisesReducer from "./reducers/exercisesReducer";
import musclesReducers from "./reducers/musclesReducers";
import { combineReducers } from "redux";

export default combineReducers({
  exercises: exercisesReducer,
  muscles: musclesReducers,
});
