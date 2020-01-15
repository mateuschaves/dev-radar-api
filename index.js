const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0-6e8hf.mongodb.net/DevRadar?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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