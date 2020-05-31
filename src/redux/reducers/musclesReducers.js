import { GET_MUSCLES } from "../actions/actionTypes";

export default function (muscles = [], action) {
  switch (action.type) {
    case GET_MUSCLES:
      return action.muscles;
    default:
      return muscles;
  }
}
