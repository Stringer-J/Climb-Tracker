const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    exercises: [
        {
            name: String,
            sets: Number,
            reps: Number,
            weight: Number,
        },
    ],
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;