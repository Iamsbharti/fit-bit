import { url } from "./apiUtils";
import axios from "axios";
import { toast } from "react-toastify";
export async function exercisesApi() {
  try {
    let { data, status } = await axios.get(url + "/getExercises");
    console.log("api-exer");
    if (data && status === 200) {
      toast.success("Exercises fetched");
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.warn(error.message);
    toast.error(error.message);
  }
}
