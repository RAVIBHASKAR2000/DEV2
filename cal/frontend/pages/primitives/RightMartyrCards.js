/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const RightMartyrCards = ({ ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.12);
        @media (max-width: 500px) {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      `}
      {...props}
    />
  );
};

export default RightMartyrCards;
