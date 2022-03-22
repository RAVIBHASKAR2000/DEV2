import React, { createContext, useContext, useState } from "react";
import { useQuery, useMutation, useApolloClient, useLazyQuery } from "@apollo/client";
import { UPDATE_CART, GET_CARTS, ADD_TO_CART,DELETE_CART } from "../gql/cart";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const getTotal = (allCarts) => {
    let prices = [];
    allCarts.forEach(cart =>
      prices.push(parseInt(cart.product.price_after_discount * cart.count))
    );

  setTotalPrice(prices.reduce((acc, current) => acc + current));
  setTotalItems(allCarts.length);
  }

  const [getCarts, {loading, error, data, refetch}] = useLazyQuery(GET_CARTS, {fetchPolicy: "network-only",
   onCompleted: ({allCarts}) => {
       setCarts(allCarts);
       getTotal(allCarts)    
   }
} )

 const [updateCarts, {}] = useMutation(UPDATE_CART, {
   onCompleted: async (item) => {
     console.log('item values',item);
     getCarts();
   }
 })

 const [deleteCart, {}]  = useMutation(DELETE_CART, {
  onCompleted: async (item) => {
    console.log('item values',item);
    getCarts();
  }
 })

 const [addToCart, {}] = useMutation(ADD_TO_CART, {
  onCompleted: async (item) => {
    console.log('item values',item);
    getCarts();
  }
})

return (
    <CartContext.Provider
      value={{
        carts,
        getCarts,
        updateCarts,
        deleteCart,
        addToCart, 
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
