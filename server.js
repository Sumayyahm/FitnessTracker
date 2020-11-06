const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");


const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//Connecting to Mongoose DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//Path to Api Routes
app.use(require("./routes/api-routes.js"));

//================================================================================================================================
//HTML Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  console.log("Im trying to go to homepage!")
});

app.get("/exercise", function(req, res) {
   res.sendFile(path.join(__dirname + '/public/exercise.html'));
   console.log("Im trying to go to exercise page!")
});

app.get("/stats", function(req, res) {
   res.sendFile(path.join(__dirname + '/public/stats.html'));
   console.log("Im trying to go to stats!")
});
//================================================================================================================================

//Listen on port 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})