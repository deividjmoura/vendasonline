const express = require('express');
const TabelaController = require('./controllers/TabelaController');
const TabelaMiddleware = require('./middlewares/TabelaMiddleware');
const routes = express.Router();

routes.get('/', (request, response) => response.send('😎  Server rodando!!!'));
routes.get("/tabela", TabelaController.Index);
routes.post("/tabela", TabelaController.store);
routes.put("/tabela/:id", TabelaMiddleware.validateId, TabelaController.update);

module.exports = routes;
