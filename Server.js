const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

app.use(bodyParser.json());

const db = require('./Config/Keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(passport.initialize());

require('./Config/Passport')(passport);

app.use('/api/goals', goals);
// app.use('/api/')

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server is working on port ${Port}`))