const { gql } = require('@apollo/client');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Exercise {
        name: String
        sets: Int
        reps: Int
        weight: Float
    }

    type Workout {
        userId: ID
        date: String
        exercises: [Exercise]
    }

    type Query {
        getAllUsers: [User]
        getUser(email: String!): User
        getWorkouts(userId: ID!): [Workout]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addWorkout(userId: ID!, date: String!, exercises: [ExerciseInput!]!): Workout
    }

    input ExerciseInput {
        name: String!
        sets: Int!
        reps: Int!
        weight: Float!
    }
`;

module.exports = typeDefs;