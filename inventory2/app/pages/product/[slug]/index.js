/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import { Star, Check, MapPin } from "react-feather";
import Container from "../../../primitives/Container";
import { initializeApollo } from "../../../lib/apolloClient";
import { useMutation } from "@apollo/client";
import { GET_PRODUCT } from "../../../gql/product";
import { useAuth } from "../../../lib/authentication";
import Link from "next/link";
import { GET_PRODUCT_IMAGES } from "../../../gql/images";
import { GET_PRODUCT_RATINGS } from "../../../gql/ratings";
import {GET_SHIPPING_PINCODE} from '../../../gql/shippingPincode'
import { ADD_TO_CART, GET_CARTS, UPDATE_CART } from "../../../gql/cart";
import Text from "../../../primitives/Heading";
import Button from "../../../primitives/Button";
import { Input } from "../../../primitives/Forms";
import { useCart } from "../../../lib/cartProvider";
import Big from "big.js";

const Product = ({ product, productImages, ratings, pinCodes }) => {
  const {
    getCarts,
    updateCarts,
    addToCart,
    carts,
    totalItems,
    totalPrice
  } = useCart();

  useEffect(() => {
    getCarts();
    console.log("carts values", carts);
  }, []);

  const [currentImage, setCurrentImage] = useState(
    productImages[0].image.publicUrl
  );
  const [currentImageBorder, setCurrentImageBorder] = useState(
    productImages[0].id
  );
  const [currentPinCode, setCurrentPinCode] = useState('');
  const [pinCodeMessage, setPinCodeMessage] = useState('');

  const checkPinCode = () => {
      console.log('hello this is pincode function', pinCodes)
      
      if(pinCodes.some(pincode => pincode.pincode.toString() === currentPinCode.toString())) {
        setPinCodeMessage('Delivery is available')
      } else {
        setPinCodeMessage('Delivery not available')
      }
  }

  let totalRatings = 0;
  ratings.forEach(rating => (totalRatings = totalRatings + rating.rating));
  const avgRating = Math.round(totalRatings / ratings.length);

  const ratingStars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const onSelected = (url, id) => {
    setCurrentImage(url);
    setCurrentImageBorder(id);
  };

  const getColor = id => {
    if (id === 5 || id === 4) {
      return "#00bc71";
    } else if (id === 3) {
      return "#00de85";
    } else if (id === 2) {
      return "#ff9f00";
    } else if (id === 1) {
      return "#ff6161";
    }
  };

  const getWidth = id => {
    let totalRatings = ratings.length;
    let currentRatingLength = ratings.filter(rating => rating.rating === id)
      .length;
    return (currentRatingLength / totalRatings) * 100;
  };

  const addCart = async () => {
    setCartModal(true);
    let count = 1;
    let cartItem = carts.find(cart => cart.product.id === product.id);
    if (cartItem) {
      console.log("product is already in the cart");
      count = cartItem.count + 1;
      await updateCarts({
        variables: {
          data: { count: count },
          id: cartItem.id
        }
      });

      // await updateCart({
      //   variables: {
      //     data: { count: count },
      //     id: cartItem.id
      //   }
      // });
    } else {
      await addToCart({
        variables: {
          data: { product: { connect: { id: product.id } }, count: count }
        }
      });
    }
  };

  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".cartContainer");
    const modal = document.querySelector(".cartModal");
    if (cartModal) {
      container.style.background = "rgba(0, 0, 0, 0.2)";
      container.style.zIndex = "10";
      modal.style.transform = "translate(0, 0)";
      document.body.style.overflow = "hidden";
      const closeCartModal = e => {
        if (modal) {
          const dimension = modal.getBoundingClientRect();
          const top = dimension.top;
          const bottom = dimension.bottom;
          const left = dimension.left;
          const right = dimension.right;
          if (
            e.clientY < top ||
            e.clientY > bottom ||
            e.clientX < left ||
            e.clientX > right
          ) {
            setCartModal(false);
          }
        }
      };

      container.addEventListener("click", closeCartModal);
      return container.addEventListener("click", closeCartModal);
    } else {
      container.style.background = "none";

      setTimeout(() => {
        container.style.zIndex = "-1";
      }, 500);
      modal.style.transform = "translate(600px, 0)";
      document.body.style.overflow = "auto";
    }
  }, [cartModal]);

  return (
    <div css={{ position: "relative" }}>
      <Container>
        <div
          css={css`
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-gap: 1.5rem;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: 60px 1fr;
              height: 75vh;
              padding: 0.5rem;
              border: 1px solid rgba(0, 0, 0, 0.1);
            `}
          >
            <div
              css={css`
                width: 40px;
                margin-right: 1rem;
                display: flex;
                flex-direction: column;
              `}
            >
              {productImages.map(product => (
                <img
                  src={product.image.publicUrl}
                  css={css`
                    height: auto;
                    width: 100%;
                    cursor: pointer;
                    margin-bottom: 0.5rem;
                    border: 1px solid
                      ${currentImageBorder === product.id
                        ? "orange"
                        : "rgba(0,0,0,0.2)"};
                    padding: 0.2rem;
                    transform: scale(
                      ${currentImageBorder === product.id ? "0.9" : "1"}
                    );
                  `}
                  onMouseOver={() =>
                    onSelected(product.image.publicUrl, product.id)
                  }
                />
              ))}
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <img
                src={currentImage}
                css={css`
                  width: auto;
                  height: 100%;
                `}
              />
            </div>
          </div>
          <div>
            <Text fontSize="1.3rem">{product.title}</Text>
            <Text fontSize="1.2rem" color="orange">
              {product.brand}
            </Text>
            <div
              css={css`
                display: flex;
                margin: 0.5rem 0;
              `}
            >
              <Text fontSize="1.1rem">
                {" "}
                {(totalRatings / ratings.length).toFixed(1)}{" "}
              </Text>
              <div
                css={css`
                  display: flex;
                  margin: 0 0.5rem;
                `}
              >
                {ratingStars.map(rating => (
                  <div
                    css={css`
                      color: ${rating.id <= avgRating && "orange"};
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <Star key={rating.id} size={18} />
                  </div>
                ))}
              </div>
              <Text color="#878787" css={{ textAlign: "center" }}>
                ({ratings.length})
              </Text>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Text
                css={css`
                  font-size: 1.7rem;
                `}
              >
                ₹
                {String(product.price_after_discount).replace(
                  /\d{1,3}(?=(\d{3})+(?!\d))/g,
                  "$&,"
                )}
              </Text>
              <Text
                css={css`
                  text-decoration: line-through;
                  margin: 0 1rem;
                  color: gray;
                  font-size: 1rem;
                `}
              >
                ₹
                {String(product.price).replace(
                  /\d{1,3}(?=(\d{3})+(?!\d))/g,
                  "$&,"
                )}
              </Text>
              <Text
                css={css`
                  color: #24a3b5;
                  font-size: 1.2rem;
                `}
              >
                {product.discount}% off
              </Text>
            </div>
            <section
              css={css`
                padding: 0;
                margin-top: 1rem;
                font-size: 1rem;
                color: #333;
              `}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <section
              css={css`
                padding: 0;
                margin-top: 1rem;
                font-size: 1rem;
                color: #333;
              `}
              dangerouslySetInnerHTML={{ __html: product.summary }}
            />
            <div
              css={css`
                display: flex;
                margin-bottom: 1rem;
              `}
            >
              <Button
                color="#ff6600"
                background="none"
                borderRadius="3px"
                padding="0.7rem 2rem"
                onClick={addCart}
                css={css`
                  border: 1px solid #ff6600;
                  margin-right: 1rem;
                  font-weight: 500;
                  font-size: 18px;
                `}
              >
                ADD TO CART
              </Button>
              <Button
                color="white"
                borderRadius="3px"
                padding="0.7rem 3rem"
                css={css`
                  font-size: 18px;
                  font-weight: 500;
                `}
              >
                BUY NOW
              </Button>
            </div>
            <Text
              color="green"
              fontSize="1.3rem"
              css={css`
                padding-top: 0.5rem;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
              `}
            >
              {product.availability ? "In stock." : ""}
            </Text>
            <div css = {css`
            display: flex;
            margin-top: 0.5rem;
            align-items: center;
            `}>
            <div css = {{width: '220px', position: 'relative'}}>
            <Input 
            value = {currentPinCode}
            onChange = {(e) => setCurrentPinCode(e.target.value)}
            css = {{paddingLeft: '1.6rem', fontSize: '0.9rem'}} placeholder = 'Enter pincode for delivery'/>
            <div css = {css`
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translate(0, -50%);
            display: flex;
            align-items: center;
            color: rgba(0,0,0,0.7);
            `}>
              <MapPin size = {16}/>
            </div>
            </div>
            <Button 
            onClick = {checkPinCode}
            borderRadius = '5px' padding = '0.5rem 1.5rem' background = 'none' color = '#ff6600' css = {{border: '1px solid #ff6600', marginLeft : '0.5rem', fontSize: '1rem'}}>Check</Button>
            </div>
            <Text>{pinCodeMessage}</Text>
          </div>
        </div>



        {ratings.length > 0 && (
          <div
            css={css`
              border-top: 1px solid rgba(0, 0, 0, 0.1);
              padding: 1.5rem 1rem;
              margin-top: 2rem;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <Text fontSize="1.5rem" fontWeight="500">
                Rating & Reviews
              </Text>
              {console.log('product slug', product.slug)}
              <Link
            href={`/product/[slug]?slug=${product.slug}/review`}
            as={`/product/${product.slug}/review`}
            passHref
          ><a>
              <Button color="white" padding="0.5rem 1rem">
                Review this product
              </Button>
              </a>
              </Link>
            </div>
            <div
              css={css`
                margin-top: 1rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                padding-bottom: 1rem;
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  width: 120px;
                `}
              >
                <Text
                  fontSize="2rem"
                  css={css`
                    text-align: center;
                  `}
                >
                  {(totalRatings / ratings.length).toFixed(1)}
                </Text>
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  {ratingStars.map(rating => (
                    <div
                      css={css`
                        color: ${rating.id <= avgRating && "orange"};
                      `}
                    >
                      <Star key={rating.id} />
                    </div>
                  ))}
                </div>
                <Text color="#878787" css={{ textAlign: "center" }}>
                  {ratings.length} Ratings & Reviews
                </Text>
              </div>
              <div
                css={css`
                  display: flex;
                `}
              >
                <ul
                  css={css`
                    list-style: none;
                    margin-left: 5rem;
                  `}
                >
                  {ratingStars.map((rating, idx) => (
                    <li
                      key={idx}
                      css={css`
                        height: 25px;
                        display: flex;

                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <Text css={{ marginRight: "0.3rem" }}>
                        {ratingStars.length - idx}
                      </Text>
                      <Star size={10} />
                    </li>
                  ))}
                </ul>
                <ul
                  css={css`
                    list-style: none;
                    margin-left: -3rem;
                  `}
                >
                  {ratingStars.map((rating, idx) => (
                    <li
                      key={idx}
                      css={css`
                        height: 25px;
                        display: flex;
                        padding-left: 1.5rem;
                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <div
                        css={css`
                          height: 5px;
                          width: 200px;
                          background: #e0e0e0;
                          // margin-bottom: 1.2rem;
                          border-radius: 5px;
                        `}
                      >
                        <div
                          css={css`
                            height: 5px;
                            width: ${getWidth(ratingStars.length - idx)}%;
                            background: ${getColor(ratingStars.length - idx)};
                            border-radius: 5px;
                          `}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul
                  css={css`
                    list-style: none;
                    margin-left: -1.5rem;
                  `}
                >
                  {ratingStars.map((rating, idx) => (
                    <li
                      key={idx}
                      css={css`
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <Text color="#878787" css={{ marginRight: "0.3rem" }}>
                        {
                          ratings.filter(
                            rating => rating.rating === ratingStars.length - idx
                          ).length
                        }
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {ratings.map(rating => (
              <div
                css={css`
                  // border-top: 1px solid rgba(0, 0, 0, 0.1);
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                  padding: 1rem 0;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    align-items: start;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      color: white;
                      border-radius: 2px;
                      background: green;
                      padding: 0rem 0.3rem;
                      width: max-content;
                      height: max-content;
                      font-size: 0.8rem;
                      margin-right: 1rem;
                    `}
                  >
                    <Text color="white" css={{ marginTop: "0.1rem" }}>
                      {rating.rating}
                    </Text>
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        margin-left: 0.2rem;
                        justify-content: center;
                      `}
                    >
                      <Star size={16} />
                    </div>
                  </div>
                  <Text fontSize="1.2rem" fontWeight="500">
                    {rating.title}
                  </Text>
                </div>
                <section
                  css={css`
                    padding: 0;
                    margin-top: 1rem;
                    font-size: 1rem;
                    color: #333;
                  `}
                  dangerouslySetInnerHTML={{ __html: rating.description }}
                />
              </div>
            ))}
          </div>
        )}
      </Container>

      <div
        className="cartContainer"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: none;
          z-index: -1;
          position: fixed;
        `}
      >
        <div
          className="cartModal"
          css={css`
            background: whitesmoke;
            transform: translate(600px, 0);
            position: absolute;
            transition: all 0.5s ease;
            top: 0;
            right: 0;
            width: 600px;
            height: 100%;
            overflow-y: scroll;
          `}
        >
          <div
            css={css`
              background: white;
              padding: 1rem;
              padding-left: 2rem;
            `}
          >
            <div
              css={css`
                color: green;
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  margin-right: 0.5rem;
                `}
              >
                <Check />
              </div>
              <Text color="green" fontWeight="600" fontSize="1.2rem">
                Added to Cart
              </Text>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  width: 190px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <img
                  src={product.image.publicUrl}
                  css={{ height: "50px", width: "auto" }}
                />
              </div>
              <div>
                <Text
                  css={css`
                    font-size: 1.2rem;
                  `}
                >
                  Cart subtotal ({totalItems} items):{" "}
                  <span css={{ color: "red" }}>
                    ₹{" "}
                    {String(totalPrice).replace(
                      /\d{1,3}(?=(\d{3})+(?!\d))/g,
                      "$&,"
                    )}
                  </span>
                </Text>
                <div
                  css={css`
                    display: flex;
                    margin-top: 0.5rem;
                  `}
                >
                  <Link href={`/cart`} as={`/cart`} passHref>
                    <a>
                      <Button
                        padding="0.5rem 1.5rem"
                        borderRadius="5px"
                        background="none"
                        css={css`
                          margin-right: 1rem;
                          border: 2px solid orange;
                        `}
                      >
                        Cart
                      </Button>
                    </a>
                  </Link>
                  <Button
                    borderRadius="5px"
                    padding="0.5rem 1rem"
                    color="white"
                  >
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            css={css`
              background: white;
              padding: 1rem 0rem;
              margin-top: 1rem;
            `}
          >
            <Text
              fontSize="1.5rem"
              css={css`
                padding-bottom: 0.5rem;
                padding-left: 2rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
              `}
            >
              Shopping Cart ({totalItems} items)
            </Text>
            {carts &&
              carts.map(cart => (
                <div
                  css={css`
                    padding: 1rem;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                    display: flex;
                  `}
                >
                  <div
                    css={css`
                      min-width: 100px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <img
                      src={cart.product.image.publicUrl}
                      css={css`
                        height: 50px;
                        width: auto;
                      `}
                    />
                  </div>
                  <div>
                    <Link
                      onClick={() => setCartModal(false)}
                      href={`/product/[slug]?slug=${cart.product.slug}`}
                      as={`/product/${cart.product.slug}`}
                      passHref
                    >
                      <a>
                        <Text css={{ cursor: "pointer" }} fontSize="1.1rem">
                          {cart.product.title.slice(0, 50)}
                          {cart.product.title.length > 50 ? "..." : ""}
                        </Text>
                      </a>
                    </Link>
                    <div css={{ display: "flex" }}>
                      <Text
                        color="#ff6600"
                        css={css`
                          width: 90px;
                        `}
                      >
                        {" "}
                        ₹{" "}
                        {String(
                          Big(cart.product.price_after_discount * cart.count)
                        ).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
                      </Text>
                      <Text color="gray" css={{ marginLeft: "0rem" }}>
                        Qty ({cart.count})
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const apolloClient = initializeApollo();
  const product = await apolloClient.query({
    query: GET_PRODUCT,
    variables: { slug }
  });
  console.log("product value", product.data.allProducts[0]);
  const pinCodes = await apolloClient.query({
    query: GET_SHIPPING_PINCODE,
    variables: {shippingId: product.data.allProducts[0].vendor.id}
  })

  console.log('pinCodes in server', pinCodes)

  const ratings = await apolloClient.query({
    query: GET_PRODUCT_RATINGS,
    variables: { productId: product.data.allProducts[0].id }
  });

  if (product.data.allProducts.length > 0) {
    let productId = product.data.allProducts[0].id;
    const images = await apolloClient.query({
      query: GET_PRODUCT_IMAGES,
      variables: { productId }
    });
    return {
      props: {
        product: product.data.allProducts[0],
        productImages: images.data.allProductImages,
        ratings: ratings.data.allProductReviews,
        pinCodes: pinCodes.data.allShippingPincodes
        // galleryImages: galleryImages.data.allMartyrs
      }
    };
  } else {
    return {
      props: { product: null, productImages: null, ratings: null }
    };
  }
};

export default Product;
