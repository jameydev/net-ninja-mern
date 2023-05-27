require('dotenv').config();
const express = require('express');
const colors = require('colors');
const workoutRoutes = require('./routes/workouts');

// creates express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Path: ${req.path} --- Method: ${req.method}`.blue);
    next();
});

// Route handlers
app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});