const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const db = require('./Config/Keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// app.use('')

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server is working on port ${Port}`))