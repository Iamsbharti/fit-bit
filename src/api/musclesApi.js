import { url } from "./apiUtils";
import axios from "axios";
export async function musclesApi() {
  console.log("Muscles-api-call");
  let { data } = await axios.get(url + "/getMuscles");
  console.log("getMuscles-", data);
  return data;
}
