const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const goals = require('./Routes/API/Goals');
const passport = require('passport');
const users = require('./Routes/API/User');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./Config/Keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(passport.initialize());

app.use('/api/goals', goals);

require('./Config/Passport')(passport);


app.use('/api/user', users);

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server is working on port ${Port}`))