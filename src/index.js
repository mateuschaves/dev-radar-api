const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();



const routes = require('./routes');

const app = express();
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0-6e8hf.mongodb.net/DevRadar?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(
    process.env.PORT,
    () => console.log(`Server started on port ${process.env.PORT}`)
);