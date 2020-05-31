import { url } from "./apiUtils";
import axios from "axios";
export async function musclesApi() {
  let { data } = await axios.get(url + "/getMuscles");
  return data;
}
