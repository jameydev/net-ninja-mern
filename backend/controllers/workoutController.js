const Workout = require('../models/Workout');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `id: '${id}' is invalid`});
    }

    const workout = await Workout.findById(id);
    
    if (!workout) {
        return res.status(404).json({ error: `No workout with id: ${id}`});
    }

    res.status(200).json(workout);
}

// create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({
            title,
            load,
            reps
        });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// delete a workout


// update a workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
};