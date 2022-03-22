/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const BackgroundImage = ({height, margin, ...props }) => {
  return (
    <div
    css={css`
    background: #cccccc;
    height: ${height};
    width: 100%;
    margin: ${margin};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `}
      {...props}
    />
  );
};

export default BackgroundImage;
