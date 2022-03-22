import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
    }
  }
`;

export const USER_QUERY = gql`
  query {
    authenticatedUser {
      name
      id
      email
    }
  }
`;