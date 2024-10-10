import { gql } from '@apollo/client';

export const ADD_USER_MUTATION = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            username
            email
            password
        }
    }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout($userId: ID!, $date: String!, $exercises: [ExerciseInput!]!) {
    addWorkout(userId: $userId, date: $date, exercises: $exercises) {
      userId
      date
      exercises {
        name
        sets
        reps
        weight
      }
    }
  }
`;

export const ADD_CLIMB = gql`
  mutation AddClimb($input: AddClimbInput!) {
    addClimb(input: $input) {
      name
      date
      area
      subArea
      type
      grade
      length
      numAttempts
      comments
      userId
    }
  }
`;