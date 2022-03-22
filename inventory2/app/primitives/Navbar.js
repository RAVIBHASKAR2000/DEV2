/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const NavbarWrap = ({ ...props }) => {
  return (
    <div
      css={css`
      background-color: #2f2626;
      background: white;
      width: 100%;
      box-shadow: 4px -17px 37px 2px rgba(0, 0, 0, 0.48);
      
      height: 70px;
      z-index: 8;
      `}
      {...props}
    />
  );
};

export default NavbarWrap;
