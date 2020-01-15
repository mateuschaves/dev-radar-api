const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (dev)
            return response.json({
                message: 'Desenvolvedor já cadastrado !'
            });


        const { name = login, avatar_url, bio } = (await axios.get(`https://api.github.com/users/${github_username}`)).data;

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        dev = await Dev.create({
            name,
            github_username,
            avatar_url,
            bio,
            techs: techs.split(',').map(tech => tech.trim()),
            location
        })
        return response.json(dev);
    }
}