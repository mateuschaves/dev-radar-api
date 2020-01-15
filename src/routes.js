const { Router } = require('express');
const routes = Router();

const DevController = require('./controller/DevController');

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

module.exports = routes;