const express = require('express');
const router = express.Router();

const Goal = require('../../Models/Goal');

router.get('/goals', (req, res) => {
    Goal.find()
        .sort({date: -1})
        .then(goals => res.json(items));
});

router.post('/goals', (req, res) => {
    const newGoal = new Goal({
        name: req.body.name
    });
    newGoal.save().then(goal => res.json(goal));
});

router.delete('/goals/:id', (req, res) => {
    Goal.findById(req.params.id)
        .then(goal => goal.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;