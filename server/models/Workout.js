const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
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

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;