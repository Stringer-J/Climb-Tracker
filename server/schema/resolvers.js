const mongoose = require('mongoose');
const { User, Workout, Climb } = require('../models/index.js');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                throw new Error('Failed to get all users');
            }
        },

        getUser: async (_, { email }) => {
            try {
                const user = await User.findOne({ email });

                console.log(user);

                if (!user) {
                    return null;
                }

                return {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    password: user.password
                };

            } catch (err) {
                throw new Error('Failed to get user');
            }
        },

        getWorkouts: async (_, { userId }) => {
            return await Workout.find({ userId });
        },

        getClimbs: async (_, { userId }) => {
            return await Climb.find({ userId });
        },
    },

    Mutation: {
        addUser: async (_, { username, email, password }) => {
            try {
                if (!username || !email || !password) {
                    throw new Error('All fields required');
                }

                const newUser = new User({ username, email, password });
                console.log(newUser);

                const savedUser = await newUser.save();
                return savedUser;

            } catch(err) {
                throw new Error('Failed to create new user');
            }
        },

        addWorkout: async (_, { userId, date, exercises }) => {
            const newWorkout = new Workout({ userId, date, exercises });
            await newWorkout.save();
            return newWorkout;
        },

        addClimb: async (_, { input }) => {
            console.log('Input:', input);
            const requiredData = [ 'name', 'date', 'area', 'type', 'grade' ];
            const newClimbData = {
                name: input.name,
                date: input.date,
                area: input.area,
                subArea: input.subArea || '',
                type: input.type,
                grade: input.grade,
                length: input.length || '',
                numAttempts: input.numAttempts || '',
                comments: input.comments || '',
                userId: input.userId,
            }

            for (const data of requiredData) {
                if (!newClimbData[data]) {
                    throw new Error(`Field ${data} is required`);
                }
            }

            const newClimb = new Climb(newClimbData);
            await newClimb.save();
            return newClimb;
        }
    },
};

module.exports = resolvers;