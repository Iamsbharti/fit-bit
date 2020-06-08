import { connectDb } from "./connect-db.js";
export async function getMusclesRoute(app) {
  app.get("/getMuscles", async (req, res) => {
    //initialize db
    let db = await connectDb();
    //get muscles collection
    let muscles = await db.collection("muscles").find().toArray();
    console.info("get muscles route");
    res.status(200).send(muscles);
  });
}
