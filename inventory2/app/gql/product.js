import gql from "graphql-tag";

export const GET_PRODUCT = gql`
query($slug: String){
    allProducts (where: {slug: $slug}){
     id
     brand
     slug
     summary
     description
     price_after_discount
     discount
     price
     title
     availability
     vendor {
       name
       id
     }
     image {
       publicUrl
     }
   }
   }
`;