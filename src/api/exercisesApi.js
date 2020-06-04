import { url } from "./apiUtils";
import axios from "axios";
import { toast } from "react-toastify";
export async function fetchExercises() {
  try {
    let { data, status } = await axios.get(url + "/getExercises");
    //console.log("api-exer");
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

export async function createExcercise(exercise) {
  console.log("create-exercise", exercise);
  try {
    let { data, status } = await axios.post(url + "/createExercise", {
      exercise,
    });
    if (data && status === 200) {
      toast.success(`${data}`);
      return exercise;
    }
  } catch (error) {
    console.warn(error.message);
    toast.error(error.message);
  }
}
