import gql from "graphql-tag";

export const GET_CATEGORIES = gql`
  query {
    allCategories{
     id
     title
     image {
        publicUrl
      }
      parent_category{
        id
        title
        image {
          publicUrl
        }
      }
   }
}
`;
