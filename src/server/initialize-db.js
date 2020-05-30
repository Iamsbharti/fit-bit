import { muscles, exercises } from "../redux/defaultStore.js";
import { connectDb } from "./connect-db.js";

export async function initializedb() {
  let db = await connectDb();

  //find the muscles collection if not found create new collections
  let _muscles = await db.collection("muscles").findOne({ id: 1 });
  console.info(_muscles ? "Db already present" : "Creating collections");
  if (!_muscles) {
    //create muscles collection
    let musclesCollection = db.collection("muscles");
    await musclesCollection.insertMany(muscles);

    //create excercise collection
    let exercisesCollection = db.collection("exercises");
    await exercisesCollection.insertMany(exercises);
  }
}
initializedb();
