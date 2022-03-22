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

export const GET_USERS = gql`
query  GetUserDetails($userId: ID!) {
    allUsers(where: {id : $userId }){
     id
     email
     address{
      id
      receiverName
      Pincode
      addressType
      alternatePhoneNum
      state
      district
      landmark
      Locality
      addresstext
      mobile
     
    }
   }
}
`;


export const UPDATE_USER = gql`
  mutation UpdateUser($usersId:ID!, $name: String!, $email: String!, $password: String!, $mobile: String! ) {
    updateUser(id : $usersId ,data: { name: $name, email: $email, password: $password, mobile: $mobile  }) {
      id
    }
  }
`;
