/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const ImageAlert = ({...props }) => {
  return (
    <div
      css={css`
            position: fixed;
            bottom: 20px;
            left: 50px;
            height: 8vh;
            border-radius: 3px;
            background: red;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            color: white;
      `}
      {...props}
    />
  );
};

export default ImageAlert;
