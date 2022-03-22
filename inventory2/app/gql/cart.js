import gql from "graphql-tag";

export const ADD_TO_CART = gql`
mutation createCart($data: CartCreateInput) {
    createCart(data: $data) {
      id
    }
  }
`;

export const UPDATE_CART = gql`
  mutation updateCart($id: ID!, $data: CartUpdateInput) {
    updateCart(id: $id, data: $data) {
      id
    }
  }
`;

export const DELETE_CART =  gql`
mutation deleteCart($id: ID!) {
  deleteCart(
id: $id
  ) {
    id
  }
}
`

export const GET_CARTS = gql`
query {
    allCarts(orderBy: "createdAt_DESC")  {
        id
        product {
            id
            slug
            slug
            title
            price_after_discount
            image {
              publicUrl
            }
            quantity
            price
           
        }
        count
    }
}
`