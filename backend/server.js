require('dotenv').config();
const express = require('express');
const colors = require('colors');

// creates express app
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(`Path: ${req.path} --- Method: ${req.method}`.blue);
    next();
});

// Route handlers
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the app' });
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});