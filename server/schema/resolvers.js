const mongoose = require('mongoose');
const { User, Workout } = require('../models/index.js');

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
    },
};

module.exports = resolvers;