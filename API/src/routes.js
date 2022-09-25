const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => response.send('teste'));
module.exports = routes;