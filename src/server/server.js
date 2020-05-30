import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

//initialize a port
let port = process.env.PORT || "4200";

//initialize the express app
let app = express();

//listen to requests
app.listen(port, console.log(`API Server Started at -${port}`));

//set body parser (url encoded) and cors
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Get works");
});
