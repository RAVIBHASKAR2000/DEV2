/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import { Star } from "react-feather";
import Container from "../../primitives/Container";
import { initializeApollo } from "../../lib/apolloClient";
import { GET_PRODUCT } from "../../gql/product";
import { GET_PRODUCT_IMAGES } from "../../gql/images";
import { GET_PRODUCT_RATINGS } from "../../gql/ratings";
import Text from "../../primitives/Heading";
import Button from "../../primitives/Button";

const Product = ({ product, productImages, ratings }) => {
  const [currentImage, setCurrentImage] = useState(
    productImages[0].image.publicUrl
  );
  const [currentImageBorder, setCurrentImageBorder] = useState(
    productImages[0].id
  );

  let totalRatings = 0;
  ratings.forEach(rating => (totalRatings = totalRatings + rating.rating));
  const avgRating = Math.round(totalRatings / ratings.length);

  const ratingStars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const onSelected = (url, id) => {
    console.log("onHoverering the item");
    setCurrentImage(url);
    setCurrentImageBorder(id);
  };

 const getColor = (id) => {
   if(id === 5 || id === 4) {
     return '#00bc71'
   } else if(id === 3) {
     return '#00de85'
   } else if(id === 2) {
     return '#ff9f00'
   } else if(id === 1) {
     return '#ff6161'
   }
 }

 const getWidth = (id) => {
    let totalRatings = ratings.length;
    let currentRatingLength = ratings.filter(
      rating => rating.rating === id
    ).length;
    return (currentRatingLength / totalRatings) * 100;
 }

  return (
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
            `}
          >
            <Button
              color="#ff6600"
              background="none"
              borderRadius="3px"
              padding="0.7rem 2rem"
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
            <Button color="white" padding="0.5rem 1rem">
              Review this product
            </Button>
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
                    >
                      
                    </div>
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
  );
};

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const apolloClient = initializeApollo();
  const product = await apolloClient.query({
    query: GET_PRODUCT,
    variables: { slug }
  });
  console.log("product value", product.data.allProducts[0].id);
  const ratings = await apolloClient.query({
    query: GET_PRODUCT_RATINGS,
    variables: { productId: product.data.allProducts[0].id }
  });

  console.log("ratings values", ratings);

  // const galleryImages = await apolloClient.query({ query: GALLERY_IMAGES });
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
        ratings: ratings.data.allProductReviews
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
