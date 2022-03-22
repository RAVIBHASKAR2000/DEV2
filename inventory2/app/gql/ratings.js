import gql from "graphql-tag";

export const GET_PRODUCT_RATINGS = gql`
  query allProductReviews($productId: ID){
    allProductReviews(where: {product: {id: $productId}}){
      title
      description
      rating
      product {
        title
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createProductReview($data: ProductReviewCreateInput) {
    createProductReview(data: $data) {
      id
    }
  }
`;
