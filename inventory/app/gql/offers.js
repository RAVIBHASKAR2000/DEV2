import gql from "graphql-tag";

export const GET_FEATURED_OFFERS = gql`
  query {
    allOffers{
     id
     title
     image {
        publicUrl
      }
   }
}
`;