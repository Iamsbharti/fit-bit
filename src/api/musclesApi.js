import { url } from "./apiUtils";
import axios from "axios";
export function musclesApi() {
  let { data } = axios.get(url + "getMuscles");
  console.log("getMuscles-", data);
  return data;
}
