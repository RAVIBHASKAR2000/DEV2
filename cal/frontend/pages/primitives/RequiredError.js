/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const RequiredError = ({...props }) => {
  return (
    <p
      css={css`
       margin: 0;
       color: red;
       fontSize: 0.7rem;
      `}
      {...props}
    />
  );
};

export default RequiredError;
