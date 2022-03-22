import gql from "graphql-tag";

export const GET_PRODUCT_IMAGES = gql`
query ($productId: ID){
    allProductImages (where: {product: {id: $productId}}){
     id
     image {
       publicUrl
     }
   }
   }
`;
