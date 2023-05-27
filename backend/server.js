require('dotenv').config();
const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// creates express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Path: ${req.path} --- Method: ${req.method}`.blue);
    next();
});

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            // listen for requests
            app.listen(process.env.PORT, () => {
                console.log('MongoDB Connected!'.green)
                console.log(`Listening on port ${process.env.PORT}`.green);
            });
        })
        .catch(err => {
            console.error(err.red);
        });

// Route handlers
app.use('/api/workouts', workoutRoutes);

