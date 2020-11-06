const db = require("../models");
const app = require("express").Router();


    //create new workout
app.post("/api/workouts", (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body)
    .then(function(dbWorkout) {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Update existing workout
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}})
    .then(function(dbWorkout) {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

//Get all the workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(function(dbWorkout) {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//go to dashboard
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(function(dbWorkout) {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = app
