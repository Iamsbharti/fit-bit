import { connectDb } from "./connect-db.js";

export async function deleteExerciseRoute(app) {
  app.delete("/deleteExercise", async (req, res) => {
    //init db
    let db = await connectDb();

    //get id from body
    let exerciseId = req.body.id;
    console.log(`${exerciseId} to be deleted`);
    //delete from exercise collection
    let exercises = await db
      .collection("exercises")
      .find({ id: exerciseId })
      .toArray();
    let _title = exercises[0].title;
    await db.collection("exercises").deleteOne({ id: exerciseId });

    //get title and define status
    let status = 0;
    _title === undefined ? (status = 500) : (status = 200);
    //console.log(status);

    //send status
    res
      .status(status)
      .send(
        status === 200 ? `${exercises[0].title} Deleted` : "Error in Delete"
      );
  });
}
