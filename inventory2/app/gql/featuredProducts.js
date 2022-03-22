import gql from "graphql-tag";

export const GET_FEATURED_PRODUCTS = gql`
  query {
    allProducts{
     id
     slug
     title
     price_after_discount
     discount
     price
     image {
        publicUrl
      }
   }
}
`;