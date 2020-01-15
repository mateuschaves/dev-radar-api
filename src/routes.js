const { Router } = require('express');
const routes = Router();

const DevController = require('./controller/DevController');

routes.post('/devs', DevController.store);

module.exports = routes;