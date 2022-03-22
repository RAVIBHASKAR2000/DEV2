import gql from "graphql-tag";

export const GET_SAVED_CARDS = gql`
query  GetUserSavedCard($userId: ID!) {
    allSavedCards(where: {user: {id : $userId }}){
     id
    
   }
}
`;