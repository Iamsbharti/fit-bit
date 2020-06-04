import { connectDb } from "./connect-db.js";

export async function createExerciseRoute(app) {
  app.post("/createExercise", async (req, res) => {
    //connect db
    let db = await connectDb();
    //get request body
    let exercise = req.body;
    console.log(exercise);

    //add the exercise
    await db.collection("exercises").insertOne(exercise);

    res.status(200).send(`${exercise.title} created`);
  });
}
