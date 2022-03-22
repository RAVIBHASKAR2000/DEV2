import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!, $city : String! , $state :String! , $twitter : String! , $facebook : String! , $insta : String!) {
    createUser(data: { name: $name, email: $email, password: $password, city: $city, state: $state, twitterHandle: $twitter, facebookHandle: $facebook ,  instaHandle : $insta  }) {
      id
    }
  }
`;
