const { gql } = require('@apollo/client');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Climb {
        name: String
        date: String
        area: String
        subArea: String
        type: String
        grade: String
        length: Int
        numAttempts: Int
        comments: String
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
        getClimbs(userId: ID!): [Climb]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addWorkout(userId: ID!, date: String!, exercises: [ExerciseInput!]!): Workout
        addClimb(input: AddClimbInput!): Climb
    }

    input ExerciseInput {
        name: String!
        sets: Int!
        reps: Int!
        weight: Float!
    }

    input AddClimbInput {
        userId: ID!
        name: String!
        date: String!
        area: String!
        subArea: String
        type: String!
        grade: String!
        length: String
        numAttempts: String
        comments: String
    }
`;

module.exports = typeDefs;