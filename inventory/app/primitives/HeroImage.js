/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const HeroContent = ({...props }) => {
  return (
    <div
      css={css`
      width: 100%;
      height: auto;
      // padding: 0 3rem;
      img {
          width: 100%;
          height: 100%;
      }
      @media (max-width: 1000px) {
        padding-right: 2rem;
        padding-left: 1rem;
      }
      @media (max-width: 800px) {
        width: 100%;
        padding: 0;
      }
      `}
      {...props}
    />
  );
};

export default HeroContent;
