/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ImageIcon = ({ ...props }) => {
  return (
    <div
      css={css`
        background: rgba(230,230,230,0.9);
        height: 32px;
        width: 32px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background: whitesmoke;
        }
      `}
      {...props}
    />
  );
};

export default ImageIcon;
