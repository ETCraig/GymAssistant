const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateProfileInput = require('../../validation/Account');

const Account = require('../../Models/Account');

const User = require('../../Models/User');

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const errors = {};
    Account.findOne({user: req.user.id})
        .populate('user', ['name'])
        .then(account => {
            if(!account) {
                // errors.noauth = 'There is no Account for this user.';
                return res.status(404).json(errors);
            }
            res.json(account);
        })
    .catch(err => res.status(404).json(err));
});

router.get('/all', (req, res) => {
    const errors = {}
    Account.find()
        .populate('user', ['name'])
        .them(accounts => {
            if(!accounts) {
                return res.status(404).json(errors);
            }
            res.json(accounts);
        })
    .catch(err => res.status(404).json({account: 'N existing account.'}));
});

router.get('/handle/:handle', (req, res) => {
    const errors = {};
    Account.findOne({user: req.params.user_id})
        .populate('user', ['name'])
        .then(account => {
            if(!account) {
                res.status(404).json(errors);
            }
            res.json(account);
        })
    .catch(err => res.status(404).json({account: 'This account doe snot exist.'}));
});

module.exports = router;