const mongoose = require('mongoose');

const { Schema } = mongoose;

const climbSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    subArea: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    length: {
        type: Number
    },
    numAttempts: {
        type: Number
    },
    comments: {
        type: String
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Climb = mongoose.model('Climb', climbSchema);

module.exports = Climb;