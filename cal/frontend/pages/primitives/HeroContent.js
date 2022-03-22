/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const HeroContent = ({...props }) => {
  return (
    <div
      css={css`
        width: 100%;
        padding-left: 3rem;
        h1 {
          margin: 0;
          font-size: 3rem;
          font-style: italic;
          width: 400px;
          line-height: 3.2rem;
        }
        @media (max-width: 1000px) {
          padding-left: 2rem;
        }
        @media (max-width: 900px) {
            h1 {
            width: 100%;
            font-size: 1.8rem;
            line-height: 2rem;
            margin-top: 1rem;
        }
          }
        @media (max-width: 500px) {
          padding: 0 2rem;
        }
      `}
      {...props}
    />
  );
};

export default HeroContent;
