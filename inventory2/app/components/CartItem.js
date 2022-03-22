/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {useState, useEffect} from 'react'
import Link from "next/link";
import { GET_CARTS, UPDATE_CART } from "../gql/cart";
import Button from '../primitives/Button'
import { useMutation, useQuery } from "@apollo/client";
import {useCart} from '../lib/cartProvider';

const CartItems = ({ item, setRemove}) => {
  const {getCarts, updateCarts, deleteCart} = useCart();

  const decreaseCartCount = async () => {
    await updateCarts({
      variables: {
        data: {count: item.count - 1 }, id: item.id
      }
    })
    // getCarts();
  }

  const increaseCartCount = async () => {
    await updateCarts({
      variables: {
        data: {count: item.count + 1 }, id: item.id
      }
    }) 
    // getCarts();
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 6fr 2fr 3fr;
        grid-gap: 1rem;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(220, 223, 226);
        padding-top: 2rem;
        padding-bottom: 2rem;
        width: 100%;
      `}
    >
      <div css={{ display: "flex", alignItems: "center" }}>
        <div css={{ minWidth: "150px" }}>
          <img
            src={item.product.image.publicUrl}
            css={css`
              height: 100px;
              width: auto;
              margin-right: 1rem;
            `}
          />
        </div>
        <div className="detailImg">
        <Link
            href={`/product/[slug]?slug=${item.product.slug}`}
            as={`/product/${item.product.slug}`}
            passHref
          >
            <a>
          <p 
          css = {css`
          font-size: 1.3rem;
          margin: 0;
          transition: all 0.5s ease;
          &:hover {
            color: orange;
          }
          `}>{item.product.title}</p>
          </a>
          </Link>
        </div>
        {/* detail */}
      </div>

      <div css = {css`
      display: flex;
      align-items: center;
      justify-content: center;
      `}>
        {/* <h3 className="priceHead">Price</h3> */}
        <div style={{ fontSize: "1.3rem" }}>
          {" "}
          ₹
          {String(item.count * item.product.price_after_discount).replace(
            /\d{1,3}(?=(\d{3})+(?!\d))/g,
            "$&,"
          )}
        </div>
        {/* price */}
      </div>

      <div
        css={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        `}
      >
        {/* <h3 className="quantHead">Quantity</h3> */}
        <div
          css={css`
            display: flex;
            height: 30px;
          `}
        >
          <QuantButton
            disabled = {item.count === 1}
            onClick = {decreaseCartCount}>
            -
          </QuantButton>
          <input
            css={css`
              width: 50px;
              margin: 0 0.5rem;
              text-align: center;
              border: 0.5px solid rgba(128, 128, 128, 0.8);
            `}
            value={item.count}
            className="text"
          />
          <QuantButton
          disabled = {item.count === item.product.quantity}
          onClick = {increaseCartCount} >
            +
          </QuantButton>
        </div>
        <Button
        onClick = {() => setRemove(item.id)}
        color = '#ff6600'
        background = 'none'
          css={css`
            margin-top: 0.8rem;
            font-size: 1rem;
            &:hover{
              color: #ff6600;
            }
          `}
        >
          REMOVE
        </Button>
        {/* Quant */}
      </div>

      {/* <div className='subTotal'>
        <h3 className='subTotalHead'>SubTotal</h3>
        <div style={{fontSize: '1.3rem'}}>
            ₹ {totalAmount.join('')}
        </div>
        </div> */}
    </div>
  );
};

const QuantButton = ({ ...props }) => {
  return (
    <button
      css={css`
      width: 30px;
      border: 0.5px solid rgba(128, 128, 128, 0.8);
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      transition: all 0.4s ease;
      background: white;
      &:hover{
        background: whitesmoke;
      }
      `}
      {...props}
    />
  );
};

export default CartItems;
