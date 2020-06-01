import { connectDb } from "./connect-db.js";
export async function exercisesRoute(app) {
  app.get("/getExercises", async (req, res) => {
    console.log("getExercises");
    //intiliaze db
    let db = await connectDb();
    //get exercises collection
    let exercises = await db.collection("exercises").find().toArray();
    res.status(200).send(exercises);
  });
}
