import { connectDb } from "./connect-db.js";
export async function getMusclesRoute(app) {
  app.get("/getMuscles", async (req, res) => {
    //initialize db
    let db = await connectDb();
    //get muscles collection
    //let muscles = await db.collection("muscles").find().toArray();
    await db
      .collection("muscles")
      .find()
      .toArray((error, result) => {
        error ? res.status(500).send(error) : res.status(200).send(result);
      });
    console.info("get muscles route");
    //res.status(200).send(muscles);
  });
}
