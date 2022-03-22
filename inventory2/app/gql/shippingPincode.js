import gql from "graphql-tag";

export const GET_SHIPPING_PINCODE = gql`
  query allShippingPincodes($shippingId: ID) {
    allShippingPincodes(where: { shipping: { id: $shippingId } }) {
      pincode
    }
  }
`;
