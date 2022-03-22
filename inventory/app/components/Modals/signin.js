/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {ArrowLeft, X} from 'react-feather';

import Router from 'next/router'
import { GoogleLoginButton } from "react-social-login-buttons";
import Login from "../signin";
import Heading from "../../primitives/Heading";
import ModalContainer from "../../primitives/ModalContainer";
import ModalCard from "../../primitives/ModalCard";


const SignIn = ({setModal}) => {

  return (
    <ModalContainer >
      <ModalCard>
        <div css = {css`
        position: absolute;
        top: -5px;
        right: -50px;
        color: white;
        cursor: pointer;
        @media(max-width: 500px) {
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
            @media (min-width: 350px) {
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
              @media (min-width: 350px) {
                display: none;
              }
            `}
          >
            <ArrowLeft size={28} />
          </div>
          <Heading fontSize="1.5rem" css = {css`margin-left: 0.2rem;`}>Sign In</Heading>
        </div>
        <GoogleLoginButton onClick={() => Router.push('/auth/google')} />
        
        {/* <Login /> */}
        {/* <div css = {css`
        margin-top: 1rem;
        @media(max-width: 700px) {
          padding: 0 1rem;
        }
        `}>
          If you don't have an account?{" "}
          <Button
          background = 'none'
            onClick={() => setModal("register")}
            color = {colors.theme}
            css = {css`opacity: 1; &:hover {text-decoration: underline}`}
            hoverColor="none"
          >
            Register
          </Button>
        </div> */}
      </ModalCard>
    </ModalContainer>
  );
};

export default SignIn;