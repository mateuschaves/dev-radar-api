const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/users/:id', (request, response) => {
    return response.json({
        message: 'Hello World'
    });
});

app.listen(
    process.env.PORT,
    () => console.log(`Server started on port ${process.env.PORT}`)
);