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

app.get("/", (req, res) => {
  console.log(req);
  res.send("Get works");
});
