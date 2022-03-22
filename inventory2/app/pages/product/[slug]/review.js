/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Star } from "react-feather";
import { useMutation } from "@apollo/client";
import Container from "../../../primitives/Container";
import Text from "../../../primitives/Heading";
import Button from '../../../primitives/Button'
import { initializeApollo } from "../../../lib/apolloClient";
import { GET_PRODUCT } from "../../../gql/product";
import { Input, TextArea } from "../../../primitives/Forms";
import {CREATE_REVIEW} from '../../../gql/ratings';

const Review = ({ product, user }) => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [inputs, setInputs] = useState({
      title: '',
      description: ''
  });

  const {title, description} = inputs;

  const onsubmit = async () => {
      console.log('hello how are you doing')
      console.log(inputs, rating);
      let productReview = {connect: {id: product.id}}
      let userReview = {connect: {id: user.id}}
      await createReview({
        variables: {
          data: {title, description, rating, product: productReview, user: userReview}
        }
      });
  }

  const onchange = e => {
      const {value, name} = e.target;
      setInputs ({...inputs, [name]: value})
  }

  return (
    <div
      css={css`
        background: whitesmoke;
        padding-bottom: 3rem;
        height: auto;
      `}
    >
      <Container width="70%">
        <div
          css={css`
            background: white;
            padding: 1rem;
          `}
        >
          <Text fontSize="1.4rem">Ratings & Reviews</Text>

          <div
            css={css`
              display: flex;
              margin: 2rem 0;
              padding-left: 0.5rem;
              cursor: pointer;
            `}
          >
            <img
              src={product.image.publicUrl}
              css={{ height: "50px", width: "auto" }}
            />
            <Text
              fontSize="1.1rem"
              css={{ marginLeft: "1rem", cursor: "pointer" }}
            >
              {product.title}
            </Text>
          </div>

          <div
            css={css`
              padding: 1rem 0;
              border-top: 1px solid rgba(0, 0, 0, 0.2);
            `}
          >
            <Text fontSize="1.3rem" css={{ marginBottom: "1rem" }}>
              Rate this product
            </Text>
            <div
              css={css`
                display: flex;
              `}
            >
              {starsArray.map(star => (
                <div
                  onClick={() => setRating(star)}
                  css={css`
                    margin-right: 0.5rem;
                    cursor: pointer;
                    color: ${rating >= star ? "orange" : "none"};
                  `}
                >
                  <Star />
                </div>
              ))}
            </div>
            <form
            onSubmit = {onsubmit}
              css={css`
                border-top: 1px solid rgba(0, 0, 0, 0.2);
                margin-top: 1rem;
                padding-top: 1rem;
              `}
            >
              <div css={{ marginBottom: "1rem" }}>
                <Text fontSize="1.2rem" css={{ marginBottom: "0.5rem" }}>
                  Title
                </Text>
                <Input name = 'title' value = {title} onChange = {onchange}/>
              </div>
              <div>
                <Text fontSize="1.2rem" css={{ marginBottom: "0.5rem" }}>
                  Description
                </Text>
                <TextArea name = 'description' value = {description} onChange = {onchange} />
              </div>
            </form>
            <Button 
            type = 'button'
            onClick = {onsubmit}
            color = 'white' padding = '0.5rem 1rem' css = {{marginTop: '1rem'}}>SUBMIT</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const getServerSideProps = async ({ params, req }) => {
  const { slug } = params;
  const {user} = req;

  const apolloClient = initializeApollo();
  const product = await apolloClient.query({
    query: GET_PRODUCT,
    variables: { slug }
  });
  console.log("product value", product.data.allProducts[0]);
  return {
    props: { product: product.data.allProducts[0] }
  };
};

export default Review;
