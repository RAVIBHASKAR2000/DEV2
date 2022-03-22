/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
