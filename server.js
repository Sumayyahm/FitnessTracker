const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnesstracker";
const collections = "workouts";

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
    console.log("Database Error: ", error);
});

// ==========================================================
//Routes
// ==========================================================


// ==========================================================
//Listen on port 3000
app.listen(3000, () => {
    console.log("App listening on port 3000");
})