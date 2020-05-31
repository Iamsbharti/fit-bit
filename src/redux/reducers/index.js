import exercisesReducer from "./exercisesReducer";
import musclesReducers from "./musclesReducers";
import { combineReducers } from "redux";

export default combineReducers({
  exercises: exercisesReducer,
  muscles: musclesReducers,
});
