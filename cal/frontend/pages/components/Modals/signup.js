/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect } from "react";
import {ArrowLeft, X} from 'react-feather';
import Sign from "../signup";
import Button from "../../primitives/Button";
import ModalContainer from "../../primitives/ModalContainer";
import ModalCard from "../../primitives/ModalCard";
import Heading from "../../primitives/Heading";
import {colors} from '../../../theme' 

const SignUp = ({ setModal }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <ModalContainer>
      <ModalCard>
      <div css = {css`
        position: absolute;
        top: -5px;
        right: -50px;
        color: white;
        cursor: pointer;
        @media(max-width: 700px) {
          display: none;
        }
        `}>
          <X size = {40}/>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 0.8rem;
            border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
            @media (min-width: 700px) {
              padding: 0;
              margin-bottom: 1rem;
              border-bottom: 0;
            }
          `}
        >
          <div
            onClick = {() => setModal(false)}
            css={css`
              margin-right: 1rem;
              color: orange;
              margin-top: 0.2rem;
              @media (min-width: 700px) {
                display: none;
              }
            `}
          >
            <ArrowLeft size={28} />
          </div>
          <Heading fontSize="1.5rem">Sign Up</Heading>
        </div>
        <Sign />
        <div css = {css`
        margin-top: 1rem;
        @media(max-width: 700px) {
          padding: 0 1rem;
        }
        `}
        >
          If you already have an account?{" "}
          <Button
            background = 'none'
            onClick={() => setModal("login")}
            color = {colors.theme}
            css = {css`opacity: 1; &:hover {text-decoration: underline}`}
            hoverColor="none"
          >
            Sign In
          </Button>
        </div>
      </ModalCard>
    </ModalContainer>
  );
};

export default SignUp;
