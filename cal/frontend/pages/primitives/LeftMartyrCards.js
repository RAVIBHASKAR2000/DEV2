/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const LeftMartyrCards = ({ align = "center", ...props }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 1rem;
        @media (max-width: 1000px) {
          margin-right: 0;
        }
        @media (max-width: 500px) {
          display: flex;
          flex-direction: column;
          margin-right: 0;
        }
      `}
      {...props}
    />
  );
};

export default LeftMartyrCards;
