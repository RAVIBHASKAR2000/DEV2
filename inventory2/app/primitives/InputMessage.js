/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const InputMessage = ({...props }) => {
  return (
    <p
      css={css`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 95%;
      text-align: center;
      transform: translate(-50%, -50%);
      margin: 0;
      `}
      {...props}
    />
  );
};

export default InputMessage;
