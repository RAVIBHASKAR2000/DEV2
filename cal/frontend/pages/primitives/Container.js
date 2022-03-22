/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export default ({width = '95%', mWidth = '95%', paddingTop = '2rem', ...props}) => {
    return (
  <div 
  css={css`
  box-sizing: border-box;
  width: ${width};
  margin: auto;
  // padding-bottom: 3rem;
  max-width: 1400px;
  padding-top: ${paddingTop};
  // min-height: calc(100vh - 45px);
  @media(max-width: 1200px) {
    width: ${mWidth}%;
  }
  @media(max-width: 900px) {
    width: 90%;
    margin: auto;
  }
 
  `}
  {...props}
  />)
}
