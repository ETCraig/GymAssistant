const express = require('express');
const router = express.Router();

const Goal = require('../../Models/Goal');
const User = require('../../Models/User');

router.get('/', (req, res) => {
    console.log('Hit Bck')
    Goal.find()
        .sort({date: -1})
        .then(goals => res.json(goals));
});

router.post('/', (req, res) => {
    const newGoal = new Goal({
        name: req.body.name,
        owner: req.body.owner
    });
    newGoal.save().then(goal => res.json(goal));
});

router.delete('/:id', (req, res) => {
    Goal.findById(req.params.id)
        .then(goal => goal.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;