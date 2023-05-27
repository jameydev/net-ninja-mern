const express = require('express');
const Workout = require('../models/Workout');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' });
});

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workout' });
});

// POST a new workout
router.post('/', async (req, res) => {
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
});

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'Delete a workout' });
});

// update a workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'Update a workout' });
});


module.exports = router;