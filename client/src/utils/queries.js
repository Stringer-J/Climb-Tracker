import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
    query GetUser($email: String!) {
        getUser(email: $email) {
            _id
            username
            email
            password
        }
    }
`;

export const GET_WORKOUTS = gql`
  query GetWorkouts($userId: ID!) {
    getWorkouts(userId: $userId) {
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

export const GET_CLIMBS = gql`
  query GetClimbs($userId: ID!) {
    getClimbs(userId: $userId) {
      name
      date
      area
      subArea
      type
      grade
      length
      numAttempts
      comments
    }
  }
`;