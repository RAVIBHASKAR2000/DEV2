/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import Container from "../primitives/Container";
import Button from "../primitives/Button";
import Text from "../primitives/Heading";
import CartItem from "../components/CartItem";
import {useCart} from '../lib/cartProvider';

const Cart = () => {
 
   const {carts, getCarts, totalPrice, totalItems, deleteCart} = useCart();

   useEffect(() => {
     getCarts();
     document.body.style.overflow = "auto";
   },[])

  const [removeModal, setRemoveModal] = useState('');

  const deleteCartItem = async (id) => {
    console.log('id value', id)
    await deleteCart({
      variables: {
        id: id
      }
    })
    setRemoveModal('')
  }

  
  console.log("prices", totalPrice);
  console.log('carts values', carts);

  useEffect(() => {
    if (removeModal) {
      const closeLoginModal = e => {
        const modal = document.querySelector(".removeModal");
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
            setRemoveModal(false);
            document.body.style.overflow = "auto";
          }
        }
      };
      const container = document.querySelector(".removeContainer");
      container.addEventListener("click", closeLoginModal);
      return container.addEventListener("click", closeLoginModal);
    }
  }, [removeModal]);
  
  if (!carts) {
    return <p>Hello this is it.</p>
  }
  else if (carts.length === 0) {
    return (
      <div
        css={css`
          width: 100%;
          background: #f3f6f8;
          padding: 2rem 0;
        `}
      >
        <div
          css={css`
            height: 90vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <h1>Shopping Cart is Empty!</h1>
        </div>
      </div>
    );
  }
  return (
    <div css={{ position: "relative" }}>
      <Container width="100%" paddingTop="70px">
        <div
          css={css`
            width: 100%;
            background: #f3f6f8;
            padding: 2rem 0;
            min-height: 90vh;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: 3fr 1fr;
              grid-gap: 1rem;
              width: 95%;
              margin: auto;
            `}
          >
            <div
              css={css`
                background: white;
                border: 1px solid rgb(220, 223, 226);
                border-radius: 5px;
                padding: 0.5rem 2rem;
              `}
            >
              <h1
                css={css`
                  border-bottom: 2px solid whitesmoke;
                  padding: 0.5rem 0;
                  font-size: 1.4rem;
                  width: 100%;
                `}
              >
                My Cart
              </h1>
              <div
                css={css`
                  margin: 1rem 0;
                `}
              >
                {carts.map(item => (
                  <CartItem
                    item={item}
                    key={item.id}
                    setRemove={setRemoveModal}
                  />
                ))}
                <div
                  css={css`
                    display: flex;
                    justify-content: flex-start;
                  `}
                >
                  <Text
                    fontSize="1.5rem"
                    css={css`
                      margin-left: auto;
                      margin-top: 1rem;
                    `}
                  >
                    Subtotal ({carts.length} items): ₹
                    <span
                      css={css`
                        font-weight: 600;
                      `}
                    >
                      {String(totalPrice).replace(
                        /\d{1,3}(?=(\d{3})+(?!\d))/g,
                        "$&,"
                      )}
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div
              css={css`
                border: 1px solid rgb(220, 223, 226);
                border-radius: 5px;
                padding: 1rem;
                background: #ffffff;
                // height: 290px;
                position: fixed;
                width: 280px;
                right: 2.5%;
              `}
            >
              <Text fontSize="1.5rem">
                Subtotal ({carts.length} items):
              </Text>
              <Text
                fontWeight="600"
                fontSize="1.5rem"
                css={{ margin: "0.5rem 0", marginTop: "0.1rem" }}
              >
                {" "}
                ₹ {String(totalPrice).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
              </Text>
              <Button
                color="white"
                borderRadius="5px"
                padding="0.5rem 1rem"
                css={{ width: "100%" }}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {removeModal && (
        <div
          className="removeContainer"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.2);
            z-index: 10;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <div
            className="removeModal"
            css={css`
              background: white;
              padding: 1rem;
              // height: 200px;
              border-radius: 5px;
            `}
          >
            <Text fontSize="1.5rem" css={{ marginBottom: "1rem" }}>
              Remove Item
            </Text>
            <Text fontSize="1.2rem" css={{ marginBottom: "1.5rem" }}>
              Are you sure you want to remove this item?
            </Text>
            <div
              css={css`
                display: flex;
              `}
            >
              <Button
                onClick={() => setRemoveModal(false)}
                background="none"
                padding="0.5rem 1rem"
                borderRadius="4px"
                css={{ border: "2px solid orange", marginRight: "1rem;" }}
              >
                CANCEL
              </Button>
              <Button 
              onClick = {() => deleteCartItem(removeModal)}
              color="white" borderRadius="4px" padding="0.5rem 1rem">
                REMOVE
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// export const getServerSideProps = async ({ req: { user } }) => {
//   const apolloClient = initializeApollo();
//   const carts = await apolloClient.query({
//     query: GET_CARTS
//   });

//   return { props: { carts: carts.data.allCarts } };
// };

export default Cart;
