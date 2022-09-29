require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const connectToDatabase = require('./database');

connectToDatabase();
const app = express();
app.use(express.json());
app.use(routes);
const port = 3333;

app.listen(port, () => {
    console.log(`😎 Backend started at http://localhost:${port}`)
});