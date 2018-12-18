const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Auth = mongoose.model('auth', AuthSchema);