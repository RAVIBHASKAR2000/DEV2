/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Hero = ({margin = '1rem 0', ...props }) => {
  return (
    <div
      css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: ${margin};
      @media (max-width: 800px) {
        flex-direction: column-reverse;
      }
      `}
      {...props}
    />
  );
};

export default Hero;
