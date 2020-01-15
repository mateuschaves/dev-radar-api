const { Router } = require('express');
const axios = require('axios');
const routes = Router();

const Dev = require('./models/Dev');

routes.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body;

    const { name = login, avatar_url, bio } = (await axios.get(`https://api.github.com/users/${github_username}`)).data;

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
        name,
        avatar_url,
        bio,
        techs: techs.split(',').map(tech => tech.trim()),
        location
    })
    return response.json(dev);
});

module.exports = routes;