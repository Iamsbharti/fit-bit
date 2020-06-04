import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { getMusclesRoute } from "./getMusclesRoute.js";
import { exercisesRoute } from "./exercisesRoute.js";
import { createExerciseRoute } from "./createExerciseRoute.js";
//initialize a port
let port = process.env.PORT || "4200";

//initialize the express app
let app = express();

//listen to requests
app.listen(port, console.log(`API Server Started at -${port}`));

//set body parser (url encoded) and cors
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

//test api path
app.get("/", async (req, res) => {
  console.log(req.body);
  res.send("Get works");
});
//get muscles route
getMusclesRoute(app);

//get exercises route
exercisesRoute(app);

//create exercise route
createExerciseRoute(app);
