import { gql } from '@apollo/client';


export const USER_DATA = gql`
fragment UserData on User{
        id
        name
        email
    
        }
`;
 
 
export const GET_ALL_USERS = gql`
  {
    allUser {
      ...UserData
    }
  }
  ${USER_DATA}
`;
